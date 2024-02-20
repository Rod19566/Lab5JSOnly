function initChat() {
    document.body.style.backgroundColor = "rgb(12,34,56)";

    const arpHeader = document.createElement("h1");
    arpHeader.id = 'arpHeader';    
    arpHeader.textContent = 'Arpanetos Chat';  
    arpHeader.style.padding = '10px';  
    arpHeader.style.backgroundColor = "rgb(51, 51, 51)";
    arpHeader.style.color = "white"
    arpHeader.style.textAlign = "center"
    arpHeader.style.fontFamily = ' Arial, sans-serif';
   
    document.body.appendChild(arpHeader);

    const messagesContainer = document.createElement("div");
    messagesContainer.id = 'messagesContainer';
    messagesContainer.style.width = '100%';
    messagesContainer.style.height = '60%';
    messagesContainer.style.position = "flex"
    messagesContainer.style.borderRadius = '3px';
    messagesContainer.style.border = '3px solid #e0e0e0';
    messagesContainer.style.fontFamily = ' Arial, sans-serif';
    messagesContainer.style.backgroundColor = "lightblue";
    
    const list = document.createElement('ul')
    messagesContainer.appendChild(list)
    
    document.body.appendChild(messagesContainer);

    const textarea = document.createElement('textarea');
    textarea.type = 'text';
    textarea.style.width = '85%';
    textarea.style.height = '10vh';

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Send';
    button.style.width = '15%';
    button.style.height = '10vh';
    button.style.position = 'fixed';
    button.style.backgroundColor = 'lightblue';
    button.style.color = "black"
    button.style.alignItems = "right"

    button.addEventListener('click', postMessage);

    button.addEventListener('click', function() {
        send(input.value);
        input.value = '';
    });
    button.addEventListener('mousedown', function() {
        this.style.backgroundColor = "rgb(51, 51, 51)";
        this.style.color = "white"
    });
    button.addEventListener('mouseup', function() {
        this.style.backgroundColor = 'lightblue';
        this.style.color = "black"
    });


    const sendContainer = document.createElement("div");
    sendContainer.style.bottom = '0';
    sendContainer.style.left = '10%';
    sendContainer.style.right = '10%';
    sendContainer.style.padding = '20px';
    sendContainer.style.padding = '20px';
    sendContainer.style.boxSizing = 'border-box'; 
    sendContainer.style.bottom = "2$";
    
    sendContainer.appendChild(textarea);
    sendContainer.appendChild(button);

    document.body.appendChild(sendContainer);

    
    const arpFooter = document.createElement("footer");
    arpFooter.id = 'arpFooter';    
    arpFooter.textContent = 'Arpanetos.lol';    
    arpFooter.style.backgroundColor = "black";
    arpFooter.style.color = "white"
    arpFooter.style.backgroundColor = "rgb(51, 51, 51)";
    arpFooter.style.textAlign = "center"
    arpFooter.style.padding = "10px"
    arpFooter.style.fontFamily = ' Arial, sans-serif';
    
    document.body.appendChild(arpFooter);

    setInterval(getMessages, 5000)
}

document.addEventListener('DOMContentLoaded', initChat);


async function getMessages() {
    list.innerHTML = '';
    const response = await fetch('C:/Users/WMGWW/Documents/DinaDocs/Uni/2024-S1/SistemasWeb/Lab5JSOnly/Lab5JSOnly/html/index.html/messages');
    const messages = await response.json();

    messages.forEach(message => {
        const item = document.createElement('li');
        item.textContent = message.username + ": " + message.message;
        list.appendChild(item);
    });
}

async function postMessage() {
    const username = "UserName";
    const message = textarea.value;
    await fetch('C:/Users/WMGWW/Documents/DinaDocs/Uni/2024-S1/SistemasWeb/Lab5JSOnly/Lab5JSOnly/html/index.html/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, message }),
    });
    textarea.value = '';
    getMessages();
}

