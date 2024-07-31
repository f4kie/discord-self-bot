### Descrição do Projeto em Português

# Self Bot Discord.js - Melhor Self Bot para Discord

Este é um projeto de Self Bot utilizando a biblioteca `discord.js-selfbot-v13`, desenvolvido para realizar várias ações automatizadas no Discord, como obter informações do servidor, enviar mensagens promocionais, e executar comandos de "nuker". **Atenção: O uso de Self Bots viola os Termos de Serviço do Discord e pode resultar na suspensão ou banimento da conta. Use com extrema cautela e somente em ambientes controlados e com permissão.**

## Funcionalidades

- **Informações do Servidor**: Obtém detalhes completos do servidor, como nome, ID, região, data de criação, total de membros, membros online, canais de texto e voz, cargos, emojis e boosts.
- **Mensagem para Amigo**: Envia uma mensagem personalizada para um amigo específico, identificando-o pelo ID.
- **Mensagem de Promoção**: Envia uma mensagem promocional para todos os amigos.
- **Nuker**: Executa ações destrutivas em um servidor específico, como deletar canais e cargos, banir todos os membros, criar um canal personalizado e enviar mensagens de spam.

## Estrutura do Projeto

- **index.js**: Arquivo principal que carrega comandos e exibe o menu.
- **menu.js**: Gerencia o menu de seleção para diferentes comandos.
- **comandos/**
  - **serverInfos.js**: Obtém informações do servidor.
  - **cmd1.js**: Envia uma mensagem para um amigo por ID.
  - **promotion.js**: Envia mensagens de promoção para todos os amigos.
  - **nuker.js**: Realiza as ações de nuker no servidor especificado.

## Como Usar

1. **Instale as dependências**:
   ```bash
   npm install discord.js-selfbot-v13 colors input
   ```

2. **Configuração**:
   - Crie um arquivo `config.json` na raiz do projeto com o seguinte conteúdo:
     ```json
     {
       "token": "SEU_TOKEN_DO_DISCORD"
     }
     ```

3. **Inicie o bot**:
   ```bash
   node index.js
   ```

4. **Navegue pelo menu e selecione a ação desejada**.

## Aviso Legal

Este projeto é destinado apenas para fins educacionais. O uso de Self Bots é contra os Termos de Serviço do Discord. Use com extrema cautela e apenas em ambientes controlados e com permissão.

---

### Project Description in English

# Self Bot Discord.js - Best Self Bot for Discord

This is a Self Bot project using the `discord.js-selfbot-v13` library, developed to perform various automated actions on Discord, such as obtaining server information, sending promotional messages, and executing "nuker" commands. **Warning: Using Self Bots violates Discord's Terms of Service and can result in account suspension or ban. Use with extreme caution and only in controlled environments and with permission.**

## Features

- **Server Information**: Retrieves complete server details, including name, ID, region, creation date, total members, online members, text and voice channels, roles, emojis, and boosts.
- **Message to Friend**: Sends a personalized message to a specific friend, identified by their ID.
- **Promotional Message**: Sends a promotional message to all friends.
- **Nuker**: Performs destructive actions on a specific server, such as deleting channels and roles, banning all members, creating a custom channel, and sending spam messages.

## Project Structure

- **index.js**: Main file that loads commands and displays the menu.
- **menu.js**: Manages the selection menu for different commands.
- **comandos/**
  - **serverInfos.js**: Retrieves server information.
  - **cmd1.js**: Sends a message to a friend by ID.
  - **promotion.js**: Sends promotional messages to all friends.
  - **nuker.js**: Executes nuker actions on the specified server.

## How to Use

1. **Install dependencies**:
   ```bash
   npm install discord.js-selfbot-v13 colors input
   ```

2. **Configuration**:
   - Create a `config.json` file in the project root with the following content:
     ```json
     {
       "token": "YOUR_DISCORD_TOKEN"
     }
     ```

3. **Start the bot**:
   ```bash
   node index.js
   ```

4. **Navigate through the menu and select the desired action**.

## Legal Disclaimer

This project is intended for educational purposes only. Using Self Bots is against Discord's Terms of Service. Use with extreme caution and only in controlled environments and with permission.
