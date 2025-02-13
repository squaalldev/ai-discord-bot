// sparkEngine.js

import config from '../config/config.js'
import Moderations from './moderations.js'
import tokenCount from './tokenCount.js'

const sparkEngine = {
  sendMessage: null,
}

sparkEngine.sendMessage = async function (prompt) {
  // Count tokens in the prompt (adjust or remove if needed)
  const tokens = tokenCount(prompt)
  const MAX_TOKENS = config.get("MAX_TOKEN")

  if (tokens > MAX_TOKENS / 2) {
    return `Please limit your prompt to a maximum of ${parseInt(MAX_TOKENS / 2)} tokens. Thank you.`
  }

  // Combine the system prompt with the user's prompt
  const systemPrompt = config.get("CONVERSATION_START_PROMPT") !== ""
    ? config.get("CONVERSATION_START_PROMPT")
    : "You are a helpful assistant"
  const combinedPrompt = `${systemPrompt}\n\n${prompt}`

  // Prepare the payload for Spark Engine
  const data = {
    api_key: process.env.SPARK_ENGINE_API_KEY,
    project_id: process.env.PROJECT_ID, // Make sure this env variable is set
    prompt: combinedPrompt
  }

  let res = await fetch("https://sparkengine.ai/api/engine/completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  res = await res.json()
  if (res.error) {
    console.error("Spark Engine API Error:", res)
  }

  // Parse the response using the "data" property
  let text = "";
  if (Array.isArray(res.data)) {
    if (res.data.length === 1) {
      text = res.data[0].output;
    } else {
      text = res.data
        .map(item => `${item.name}\n${item.output}`)
        .join('\n\n');
    }
  } else if (typeof res.data === "string") {
    text = res.data.trim();
  }

  return {
    text,
    usage: res.usage || {},
    tokens
  }
}

export async function askQuestion(question, cb, opts = {}) {
    try {
        let redFlag = await Moderations(question)
        if (redFlag) {
            cb("Your prompt contains harmful content!")
            return
        }
    } catch (e) {
        console.error(e)
        cb(e)
        return
    }

    // Extract command type if provided in opts
    const commandType = opts.commandType || "chat";  // Default to "chat"
    const modifiedQuestion = `{{${commandType}}} ${question}`;

    try {
        const response = await sparkEngine.sendMessage(modifiedQuestion);
        if (!response.text) {
            throw "No response from Spark Engine!";
        }
        cb(response.text);
    } catch (e) {
        cb("Oops, something went wrong! (Error)");
        console.error("Spark Engine error:", e);
    }
}


export default sparkEngine
