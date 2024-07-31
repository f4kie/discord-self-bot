const { Client } = require('discord.js-selfbot-v13');
const colors = require('colors');
const config = require('./config.json');
const client = new Client();
const fs = require('fs');
const path = require('path');

client.commands = new Map();

async function loadCommands() {
    const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./comandos/${file}`);
        client.commands.set(command.name, command);
    }
}

async function executeCommand(commandName, ...args) {
    const command = client.commands.get(commandName);
    if (command) {
        await command.execute(...args);
    } else {
        console.log(`Comando ${commandName} não encontrado.`.red);
    }
}

client.on('ready', async () => {
    console.clear();
    console.log('[!] '.yellow + 'A conta '.green + `${client.user.username}`.reset + ' foi logada com sucesso!\n\n\n'.green);

    const menu = require('./comandos/menu');
    await menu(client);
});

async function main() {
    await loadCommands();
    client.login(config.token);
}

main();
