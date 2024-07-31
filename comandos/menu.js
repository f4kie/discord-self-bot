const input = require('input');
const gradient = require('gradient-string');

module.exports = async (client) => {
    console.clear();
    console.log('[!] '.yellow + 'A conta '.green + `${client.user.username}`.reset + ' foi logada com sucesso!\n\n\n'.green);
    console.log(gradient.fruit(`        .▄▄ · ▄▄▄ .▄▄▌  ·▄▄▄    ▄▄▄▄·       ▄▄▄▄▄
        ▐█ ▀. ▀▄.▀·██•  ▐▄▄·    ▐█ ▀█▪▪     •██  
        ▄▀▀▀█▄▐▀▀▪▄██▪  ██▪     ▐█▀▀█▄ ▄█▀▄  ▐█.▪
        ▐█▄▪▐█▐█▄▄▌▐█▌▐▌██▌.    ██▄▪▐█▐█▌.▐▌ ▐█▌·
         ▀▀▀▀  ▀▀▀ .▀▀▀ ▀▀▀     ·▀▀▀▀  ▀█▄▀▪ ▀▀▀ `))

    console.log('                 https://github.com/f4kie\n')
    console.log('\n{ '.reset + 'Menu Principal'.green + ' }\n'.reset);
    console.log(`[1.] `.yellow + `Informações de um Servidor    |    ` + `[2.] `.yellow + `Enviar Mensagem para Amigo`);
    console.log(`[3.] `.yellow + `Divulgaçao em Massa           |    ` + `[4.] `.yellow + `Server Nuker\n\n`);


    const choice = await input.text('[-]'.yellow + ' Selecione uma opção [1/4]: '.green + ''.reset);

    switch (choice) {
        case '1':
            await client.commands.get('serverInfos').execute(client);
            break;
        case '2':
            await client.commands.get('friendmsg').execute(client);
            break;
        case '3':
            await client.commands.get('promotion').execute(client);
            break;
        case '4':
            await client.commands.get('nuker').execute(client);
            break;
        default:
            console.log('[ERRO]'.red + ' Opção inválida, encerrando o programa.'.reset);
            break;
    }
};
