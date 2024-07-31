const input = require('input');

/** modo seguro */

module.exports = {
    name: 'promotion',
    description: 'Envia uma mensagem de promoção para todos os amigos',
    async execute(client) {
        const message = await input.text('[-]'.yellow + ' Digite a mensagem de divulgaçao: '.green + ''.reset);
        const dmChannels = client.channels.cache.filter(channel => channel.type === 'DM');

        if (!dmChannels.size) {
            console.log('[ERRO]'.red + ' Nenhum amigo encontrado.'.reset);
            return;
        }

        for (const [id, dmChannel] of dmChannels) {
            try {
                const user = dmChannel.recipient;
                await user.send(message);
                console.log('[-]'.yellow + ` Mensagem enviada com sucesso para:`.green + ` ${user.username}`.reset);
            } catch (error) {
                console.log('[ERRO]'.red + ` Erro ao enviar mensagem para o amigo com ID: `.red + `${user.username}`.reset, error);
            }
        }
    }
};
