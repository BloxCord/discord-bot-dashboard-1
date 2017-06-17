var exports = module.exports = {};

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./../config.json");
const prv_config = require("./../private_config.json")
const app = require("./app");

const commandPrefix = config.prefix;

client.on('ready', () => {
    console.log('>> Bot is ready!');
    console.log('>> Logged in as ' + client.user.username);
    console.log('>> Running on version ' + config.bot_version);
    client.user.setGame(config.bot_game);

    client.user.setStatus(config.bot_status);

    app.startApp(client);
});

// Change it to config.token
// prv_config is only for personal usage when you don´t want that others have your token!
// To use prv_config, create a file called "private_config.json" inside the main directory.
// .gitignore will ignore this file when you want to commit and push.
client.login(prv_config.token);

exports.setGameStatus = function (game) {
    client.user.setGame(game);
    console.log("\n>> Bot Change > Game status set to: " + game + "\n");
};

exports.setBotStatus = function (status) {
    if(status != "online" && status != "idle" && status != "invisible" && status != "dnd" ){
        console.error("\n>> Bot Error: Invalid status to set! Use only the 4 vaild ones!" +
            "\n>> PresenceStatus: https://discord.js.org/#/docs/main/stable/typedef/PresenceStatus")
    }else{
        client.user.setStatus(status);
        console.log("\n>> Bot Change > Status set to: " + status + "\n");
    }
};

exports.sendClientObject = function () {
  return client;
};