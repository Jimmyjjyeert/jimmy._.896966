const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
}

function sendMessage() {
  const message = messageInput.value;
  appendMessage(`You: ${message}`);
  // TODO: Send message to the server using an API
  messageInput.value = '';
}
const socket = new WebSocket('ws://localhost:3000');

// 連線建立時的處理
socket.addEventListener('open', (event) => {
    console.log('Connected to server');
});

// 接收來自伺服器的訊息
socket.addEventListener('message', (event) => {
    const message = event.data;
    console.log(`Received: ${message}`);

    // 在前端顯示訊息，你可以自行實現顯示邏輯
});

// 送出訊息到伺服器
function sendMessage(message) {
    socket.send(message);
}
