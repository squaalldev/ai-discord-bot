# **Spark Engine Discord Bot**  

![AI-Powered Discord Bot](screenshots/discord-bot-banner.png)  

An AI-powered chatbot for Discord using **Spark Engine** to handle chat, search, image generation, and video assistance. Uses Llama3.3, DALL-E, Minimax Video-01 and Spark Engine to create the ultimate AI Discord bot for your servers.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/YOUR-REPO/Spark-Engine-Discord-Bot)  

[![GitHub](https://img.shields.io/badge/GitHub-Open%20Source-blue?logo=github)](https://github.com/spark-engine-ai)  
[![Discord](https://img.shields.io/badge/Join%20Our%20Community-Discord-blue?logo=discord)](https://discord.gg/VAQA5c32jM)  

---

## **Features**  
✅ **AI-Powered Chat** - Have dynamic conversations with Spark Engine  
🔍 **Web Search** - Fetch real-time search results  
🎨 **Image Generation** - Create AI-generated images  
📽️ **Video Assistance** - Get AI-generated video insights  
⚡ **Easy Deployment** - Run locally, with Docker, or deploy to Vercel  

---

   ![Discord Bot Example](screenshots/image-4.png)  


## **Getting Started**  

### **Step 1: Create a Discord Bot**  

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)  
2. Click **"New Application"**, name your bot, and go to the **Bot** tab  
3. Click **"Add Bot"** → Copy your **Bot Token** (and add it to `DISCORD_BOT_TOKEN` in Vercel or the `.env`)  
   ![Create a Discord Bot](screenshots/image-1.png)  
4. Under **OAuth2 → Copy Client ID** (and add it to `DISCORD_CLIENT_ID` in Vercel or the `.env`)  
   ![Get Client ID](screenshots/image-2.png)  
5. Select `bot` & `applications.commands`, then choose permissions (e.g., Send Messages, Read Messages, etc.)  
6. Go to [Spark Engine](https://sparkengine.ai) and create an account  
7. Create a new project on Spark Engine and upload the `discord-bot.spk` file found at the root of this project  
   ![Upload Discord Bot Project](screenshots/image-3.png)  
8. Copy your **Project ID** by clicking the **"API"** button inside your project menu on Spark Engine (and add it to `PROJECT_ID` in Vercel or the `.env`). This will be the AI flow that your bot calls, and you can modify it as needed.  
9. Go to [Your API Keys](https://sparkengine.ai/account/api-keys) and add it to `SPARK_ENGINE_API_KEY` in Vercel or the `.env`
10. Deploy the app using the steps below and login to the dashboard that comes with the bot. Then invite the bot to Discord!   

---

## **Installation**  

### **1️⃣ Local Setup**  

#### **Install Node.js**  
Download & install **Node.js (v16 or higher)** from [nodejs.org](https://nodejs.org/).  

#### **Clone the Repository**  
```bash
git clone https://github.com/YOUR-REPO/Spark-Engine-Discord-Bot.git
cd Spark-Engine-Discord-Bot
```

#### **Install Dependencies**  
```bash
npm install
```

#### **Set Up Environment Variables**  
Rename `.env.example` to `.env` and fill in the following values:  
```env
DISCORD_BOT_TOKEN=your-bot-token
DISCORD_CLIENT_ID=your-client-id
SPARK_ENGINE_API_KEY=your-api-key
PROJECT_ID=your-spark-engine-project-id
DASHBOARD_USERNAME=admin
DASHBOARD_PASSWORD=admin
```

#### **Run the Bot Locally**  
```bash
npm run start
```

The bot should now be running! ✅ 

Go to localhost:8080 in your browser and enter your DASHBOARD_USERNAME and DASHBOARD_PASSWORD (found in the .env - default for both is "admin").

---

### **2️⃣ Docker Setup**  

#### **Build the Docker Image**  
```bash
docker build -t discordsparkengine .
```

#### **Run the Docker Container**  
```bash
docker run -p 8080:8080 -v discordsparkengineconfig:/discordsparkengine/configFile discordsparkengine
```

---

### **3️⃣ Deploy Instantly to Vercel**  

To deploy instantly, click this button:  

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/YOUR-REPO/Spark-Engine-Discord-Bot)  

#### **Or Deploy Manually**  
1. Install the Vercel CLI:  
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:  
   ```bash
   vercel login
   ```
3. Deploy the bot:  
   ```bash
   vercel --prod
   ```

---

Now go to your domain and enter your the admin username and password you set. You can invite the bot from here.

## **Commands**  

| Command  | Description |
|----------|------------|
| `/chat`  | General AI chat |
| `/search` | Perform a web search |
| `/image` | Generate an AI-powered image |
| `/video` | Generate an AI-powered video |

---

## **License**  
This project is licensed under the **MIT License**.  

---

Now you're ready to launch your **Spark Engine Discord Bot**! 🚀  