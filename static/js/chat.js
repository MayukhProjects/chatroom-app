const socket = io();

socket.on('message', function(msg) {
  const messages = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  messages.appendChild(messageElement);
});

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value;
  if (message.trim() !== '') {
    socket.send(message);
    input.value = '';
  }
}
