const input = require('input');
const menu = require('./menu');

module.exports = {
    name: 'friendmsg',
    description: 'Envia uma mensagem para um amigo pelo ID',
    async execute(client) {
        const friendId = await input.text('[-]'.yellow + ' Digite o ID do amigo para enviar mensagem: '.green + ''.reset);
        try {
            const friend = await client.users.fetch(friendId);
            if (friend) {
                let msg;

                while (!msg || msg.trim() === '') {
                    msg = await input.text('[!] '.yellow + ' Digite a mensagem que deseja enviar: '.green + ''.reset);
                    console.log('\n\n');
                }

                await friend.send(msg);

                if(!msg || msg.trim() === '') {
                    return console.log('[ERRO]'.red + "Você não escreveu nenhuma mensagem, repetindo...".reset);
                }

                console.log('[✅]'.yellow + ` Mensagem enviada para`.green + ` ${friend.username}!\n\n`.reset);

                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                
                async function demo() {
                    for (let i = 5; i >= 0; i--) {
                        console.log('[INFO]'.yellow + ' Retornando para o menu em '.green + `${i} segundos...`.reset);
                        await sleep(1000); 
                    }

                    await menu(client);
                }

                demo();
            } else {
                console.log('[ERRO]'.red + ` Amigo com ID `.green + `${friendId} `.reset + `não encontrado.`.green);
            }

        } catch (error) {
            console.log('[ERRO]'.red + ` Erro ao enviar mensagem para o amigo com ID `.green + `${friendId} `.reset + '.'.green, error);
        }
    }
};
