# Chiyoko-bot
Multipurpose Discord bot originally made for Chill Hub server

## Features:
- Based on Aoi.js which is easy to customize
- Uses single index.js file so no need to wait for upload bunch of files (this would be useful for pterodactyl hosting)
- Basic moderation commands
- Ticketing system
- *Other features coming soon ...*

## How-to:
1. Install Node.JS (if you host it locally eg. Linux laptop or Windows PC)
2. Clone this repository using git or download zip file (the download link is in green code button)
3. Go into the bot directory (if you host it locally or using VPS) or upload it to any pterodactyl hosting provider
4. (Skip this if you're use pterodactyl host) Run `npm i` to install the dependencies
5. Open `index.js` using any editor and paste your bot token there
6. Finally run index.js by typing `node index` or start your server (for pterodactyl host). Now your bot should be started

**Wait, why replit or glitch isn't mentioned here?**
Those **online IDE** platform doesn't really focused for 24/7 hosting. There's chance that your token will be leaked if you didn't make your repl or glitch project only visible to you (private). However, if replit or glitch is last choice to host your bot, follow steps below to paste your bot token securely. Otherwise skip step 7-11

7. Go to secrets
8. Click create secrets
9. Use `DISCORD_TOKEN` as variable and your bot token as value
10. Save it
11. Follow step 6 to start your bot (note that further configuration is needed to keep it 24/7)
