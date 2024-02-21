function initChat() {
    document.body.style.backgroundColor = "rgb(12,34,56)";

    const arpHeader = document.createElement("h1");
    arpHeader.id = 'arpHeader';    
    arpHeader.textContent = 'Arpanetos Chat';  
    arpHeader.style.backgroundColor = "rgb(51, 51, 51)";
    arpHeader.style.color = "white";
    arpHeader.style.textAlign = "center";
    arpHeader.style.padding = '10px';  
    arpHeader.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(arpHeader);
    
    const themeToggle = document.createElement("label");
    themeToggle.innerHTML = `
        <input type="checkbox" id="theme-toggle">
        <span>Dark Mode</span>
    `;
    document.body.appendChild(themeToggle);
    
    const themeToggleInput = document.getElementById('theme-toggle');
    themeToggle.style.fontFamily = "Arial, sans-serif";
    themeToggle.style.position = 'flex';
    themeToggleInput.addEventListener('change', function() {
        if (this.checked) {
            theme('dark');
        } else {
            theme('light');
        }
    });
     
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const themeToggleInput = document.getElementById('theme-toggle');
        themeToggleInput.checked = savedTheme === 'dark';
        theme(savedTheme);
    });

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
    button.style.borderColor = '#333333';
    button.style.backgroundColor = 'lightblue';
    button.style.color = "black"
    button.style.alignItems = "right"

    button.addEventListener('click', postMessage);

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
    sendContainer.style.bottom = "2";
    
    sendContainer.appendChild(textarea);
    sendContainer.appendChild(button);

    document.body.appendChild(sendContainer);
    
    const arpFooter = document.createElement('p');
    arpFooter.id = 'arpFooter';    
    arpFooter.textContent = 'arpanetos.lol';   
    arpFooter.style.backgroundColor = "black";
    arpFooter.style.color = "white"
    arpFooter.style.backgroundColor = "rgb(51, 51, 51)";
    arpFooter.style.textAlign = "center"
    arpFooter.style.padding = "15px"
    arpFooter.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(arpFooter);

    theme('light');
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
    const message = inputText.value;
    await fetch('C:/Users/WMGWW/Documents/DinaDocs/Uni/2024-S1/SistemasWeb/Lab5JSOnly/Lab5JSOnly/html/index.html/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, message }),
    });
    inputText.value = '';
    getMessages();
}

function theme(theme){    
    const body = document.body;
    const messagesContainer = document.getElementById('messagesContainer');
    const arpHeader = document.getElementById('arpHeader');
    const themeToggleInput = document.getElementById('themeToggle');
    const arpFooter = document.getElementById('arpFooter');
    const button = document.getElementById('button');

    const lightMode = theme === 'light';
    
    body.style.backgroundColor = lightMode ? '#9cb3d6' : '#0C2238';

    arpHeader.style.backgroundColor = lightMode ? '#cacccf' : '#333333';
    arpHeader.style.color = lightMode ? 'black' : 'white';

    themeToggleInput.style.color = lightMode ? 'black' : 'white';
 
    arpFooter.style.backgroundColor = lightMode ? '#cacccf' : '#333333';
    arpFooter.style.color = lightMode ? 'black' : 'white';
 
    messagesContainer.style.backgroundColor = lightMode ? '#cacccf' : 'lightblue';
    messagesContainer.style.color = lightMode ? 'black' : 'black';

    button.style.backgroundColor = lightMode ? '#cacccf' : '#333333';
    button.style.borderColor = lightMode ? '#cacccf' : '#333333';

    localStorage.setItem('theme', theme);
}

