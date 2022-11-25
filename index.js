const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "",
  prefix: "a!",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  // Mobile platform, set it to false if you don't want mobile status
  mobilePlatform: true
})

//Events
bot.onMessage()
bot.onRoleCreate ()

//Bot stats, you can use multiple stats here

bot.status({
    text: "a!help",
    type: "LISTENING",
    status: "online",
    time: 5
})

// Bot variables, you can just leave it and set it later using a!setup command
bot.variables({
  staffrole: "changeme"
})

bot.variables({
  modlogs: "changeme"
})

bot.variables({
  ticketcategory: "ticketID"
})

//For this you need to set channel ID manually from the variable above
/*
bot.loopCommand({
  code: `
  :wave: Um, hello. How are y'all doing?
  `,
  channel: "$getServerVar[hellocmd]",
  executeOnStartup: false,
  every: 14400000
  })
*/

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

bot.command({
  name: "ban",
  code: `
  $username[$message] has been banned from the guild.
  $ban[$guildID;$message;0;Banned by $authorID]
  $onlyPerms[ban;kick;:sob: You can't do that]
  `
})

bot.command({
  name: "topic",
  code: `The topic of <#$channelID> is: $channelTopic`
});

bot.command({
  name: "unban",
  code: `$username[$message] has been unbanned from the guild
  $unban[$guildID;$message]
  $onlyPerms[ban;kick;:sob: You can't do that]
  `
})

bot.command({
  name: "avatar",
  code: `
  Here it is
  $userAvatar[$message]
  `
});

bot.command({
  name: "banner",
  code: `
  $username's banner
  $authorBanner
  `
});

bot.command({
  name: "setup",
  code: `
  $username, Welcome to the setup screen. Now let's set up things

To set Ticket cateogry ID, use a!ticket-category
To set Mod logs, use a!modlogs
To set staff roles, use a!staffrole

More options comming soon
$onlyPerms[admin;:sob: You can't do that]
  `
})

bot.command({
  name: "modlogs",
  code: `$setServerVar[modlogs;$message]
  $onlyForRoles[$getServerVar[staffrole];:sob: You can't do that]`
})

bot.command({
  name: "ticket-category",
  code: `$setServerVar[ticketcategory;$message]
  $onlyForRoles[$getServerVar[staffrole];:sob: You can't do that]`
})

bot.command({
  name: "exec",
  code: `
  $exec[$message]
  $onlyForIDs[$botOwnerID;:sob: You aren't bot owner]
  `
})

bot.command({
  name: "eval",
  code: `
  $eval[$message]
  $onlyForIDs[$botOwnerID;:sob: You aren't bot owner]
  `
})

bot.command({
  name: "help",
  code: `
  $author[$client[user.username]'s help command]
  $description[1;Utilities:
  **a!avatar** Fetch someone's avatar (target user must be provided by ID)
  **a!neofetch** View $client[user.username]'s PC info
  **a!ping**  View bot latency
  **a!stats** View this server and $client[user.username]'s stats
  **a!topic** View channel topic
  **a!create-ticket** Create support ticket (don't abuse)
  **a!close-ticket** Close ticket inside ticket channel
  **a!ticket-category** Set Ticket category ID
  
  Moderation commands:
  **a!ban** Ban a user
  **a!kick** Kick a user
  **a!unban** Unban a user
  **a!staffrole** Set staff role by ID

  Developer-only commands:
  **a!eval** Evaluate Aoi.js expressions
  **a!exec** Execute shell commands
  **a!reboot** Restart $client[user.username]'s PC]
  $color[GREEN]
  $footer[Requested by $userTag[$authorID] - This feature is still in beta]
  `
})

bot.command({
  name: "staffrole",
  code: `$setServerVar[staffrole;$message]
  $onlyPerms[admin;:sob: You can't do that]`
})

bot.command({
  name: "create-ticket",
  code: `Ticket Created!
$newTicket[ticket-$random[100;10000];Hello. Your ticket is added. Please wait for few moments and we will reply soon. Opening ticket without reason will goes on warn!;$getServerVar[ticketcategory];no;Error!]
`
})

bot.command({
  name: "close-ticket",
  code: `$closeTicket[Uh, this channel isn't ticket channel]
  $onlyForRoles[$getServerVar[staffrole];:sob: You can't do that]`
})

bot.command({
  name: "stats",
  code: `
  $description[1;
  **Server stats**
  Total channels: $channelCount
  Total members: $membersCount
  Total roles: $roleCount

**$client[user.username]'s stats**
  Aoi.js: v$packageVersion
  CPU usage: $cpu
  Memory usage: $ram
  Bot uptime: $uptime
  Ping: $pingms

To see my PC info run a!neofetch]
   $color[GREEN]
  `
})

bot.command({
  name: "neofetch",
  code: `$exec[neofetch --stdout]`
}) 

  bot.command({
    name: "reboot",
    code: `
    $reboot[index.js]
    $onlyForIDs[$botOwnerID;:sob: You aren't bot owner]
    `,
    }) //server.js aka our main file, this will restart the bot 

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
