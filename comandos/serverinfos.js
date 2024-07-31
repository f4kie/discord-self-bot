const input = require('input');
const menu = require('./menu');


module.exports = {
    name: 'serverInfos',
    description: 'Obtém informações do servidor pelo ID',
    async execute(client) {
        console.clear();
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function demo() {
            for (let i = 5; i >= 0; i--) {
                console.log('[INFO]'.yellow + ' Retornando para o menu em '.green + `${i} segundos...`.reset);
                await sleep(1000); 
            }
        
            console.clear();
            await menu(client);
        }

        

        const serverId = await input.text('[-]'.yellow + ' Digite o ID do servidor: '.green + ''.reset);

        const server = client.guilds.cache.get(serverId);

        if (!server) {
            console.log('[ERRO] '.red + 'Servidor não encontrado.'.reset);
            return;
        }

        const serverInfo = {
            nome: server.name,
            id: server.id,
            região: server.region,
            criadoEm: server.createdAt.toLocaleDateString(),
            totalMembros: server.memberCount,
            membrosOnline: server.members.cache.filter(member => member.presence && member.presence.status === 'online').size,
            canaisTexto: server.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size,
            canaisVoz: server.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size,
            cargos: server.roles.cache.size,
            emojis: server.emojis.cache.size,
            boosts: server.premiumSubscriptionCount
        };

        console.log('\n\n{ '.reset + 'Informações do Servidor:'.green + ' }'.reset);
        console.log(`- Nome: `.yellow + `${serverInfo.nome}`);
        console.log(`- ID: `.yellow + `${serverInfo.id}`);
        console.log(`- Região: `.yellow + `${serverInfo.região}`);
        console.log(`- Criado em: `.yellow + `${serverInfo.criadoEm}`);
        console.log(`- Total de Membros: `.yellow + `${serverInfo.totalMembros}`);
        console.log(`- Membros Online: `.yellow + `${serverInfo.membrosOnline}`);
        console.log(`- Canais de Texto: `.yellow + `${serverInfo.canaisTexto}`);
        console.log(`- Canais de Voz: `.yellow + `${serverInfo.canaisVoz}`);
        console.log(`- Cargos: `.yellow + `${serverInfo.cargos}`);
        console.log(`- Emojis: `.yellow + `${serverInfo.emojis}`);
        console.log(`- Boosts: `.yellow + `${serverInfo.boosts}\n\n`);


        let then;

        while (!then || then.trim() === '') {
            then = await input.text('[!]'.yellow + ' Deseja voltar ao menu principal?'.green + ''.reset)
            console.log('\n\n')
            if(then === 'S' || 's') { demo(); }
            if(then === 'N' || 'n') { process.exit(); }

        }



        if(!then || then.trim() === '') {
            return console.log('[ERRO]'.red + "Você não escreveu nenhuma mensagem, repetindo...".reset);
        }

        
    }
};
