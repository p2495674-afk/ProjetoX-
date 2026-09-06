# ProjetoX
Make right out of wrong 

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>ProjetoX AI</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            background: #0b0b0f;
            color: white;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .app {
            width: 100%;
            max-width: 500px;
            height: 100vh;
            max-height: 850px;
            background: #111116;
            display: flex;
            flex-direction: column;
        }

        /* CABEÇALHO */

        header {
            padding: 20px;
            background: #15151c;
            border-bottom: 1px solid #292932;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #2525ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 21px;
        }

        header h1 {
            font-size: 20px;
        }

        header p {
            font-size: 12px;
            color: #888894;
            margin-top: 3px;
        }

        /* CHAT */

        #chat {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .message {
            max-width: 80%;
            padding: 12px 15px;
            border-radius: 15px;
            line-height: 1.4;
            font-size: 15px;
        }

        .bot {
            background: #202027;
            align-self: flex-start;
            border-bottom-left-radius: 4px;
        }

        .user {
            background: #2525ff;
            align-self: flex-end;
            border-bottom-right-radius: 4px;
        }

        /* ÁREA DE TEXTO */

        .input-area {
            padding: 14px;
            background: #15151c;
            border-top: 1px solid #292932;
            display: flex;
            gap: 10px;
        }

        #input {
            flex: 1;
            background: #22222b;
            color: white;
            border: none;
            outline: none;
            padding: 14px;
            border-radius: 12px;
            font-size: 15px;
        }

        #input::placeholder {
            color: #777780;
        }

        button {
            width: 50px;
            border: none;
            border-radius: 12px;
            background: #2525ff;
            color: white;
            font-size: 20px;
            cursor: pointer;
        }

        button:active {
            transform: scale(0.95);
        }
    </style>
</head>

<body>

<div class="app">

    <header>
        <div class="logo">🤖</div>

        <div>
            <h1>ProjetoX AI</h1>
            <p>Assistente virtual • Online</p>
        </div>
    </header>

    <main id="chat">

        <div class="message bot">
            Olá! 👋 Eu sou o ProjetoX AI.
            <br><br>
            Digite alguma coisa para conversar comigo.
        </div>

    </main>

    <div class="input-area">

        <input
            id="input"
            type="text"
            placeholder="Digite uma mensagem..."
            autocomplete="off"
        >

        <button onclick="sendMessage()">➤</button>

    </div>

</div>

<script>

    const input = document.getElementById("input");
    const chat = document.getElementById("chat");

    function addMessage(text, type) {

        const message = document.createElement("div");

        message.classList.add("message", type);

        message.innerHTML = text;

        chat.appendChild(message);

        chat.scrollTop = chat.scrollHeight;
    }

    function botResponse(text) {

        const msg = text.toLowerCase();

        if (msg.includes("oi") ||
            msg.includes("olá") ||
            msg.includes("ola")) {

            return "Olá! 😎 Como você está?";
        }

        if (msg.includes("quem é você") ||
            msg.includes("quem e voce")) {

            return "Eu sou o ProjetoX AI 🤖. Ainda estou na minha primeira versão!";
        }

        if (msg.includes("projetox")) {

            return "O ProjetoX é um projeto experimental de assistente virtual 🚀.";
        }

        if (msg.includes("ajuda")) {

            return "Claro! Posso responder algumas mensagens básicas. Tente perguntar quem eu sou ou falar 'oi'.";
        }

        if (msg.includes("tchau")) {

            return "Até mais! 👋";
        }

        if (msg.includes("obrigado") ||
            msg.includes("obrigada")) {

            return "De nada! 😎";
        }

        return "Hmm... ainda não sei responder isso 🤔. Mas podemos me deixar mais inteligente nas próximas versões!";
    }

    function sendMessage() {

        const text = input.value.trim();

        if (text === "") {
            return;
        }

        addMessage(text, "user");

        input.value = "";

        setTimeout(() => {

            const response = botResponse(text);

            addMessage(response, "bot");

        }, 500);
    }

    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

</script>

</body>
</html>