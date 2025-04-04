const sampleChats = [
  {
    sender: 'me',
    content: 'Hello! How are you?',
    timestamp: new Date('2023-04-18T10:00:00')
  },
  {
    sender: 'contact',
    content: 'Hi! I\'m good, thanks for asking. How about you?',
    timestamp: new Date('2023-04-18T10:01:00')
  },
  {
    sender: 'me',
    content: 'I\'m doing great, thank you!',
    timestamp: new Date('2023-04-18T10:02:00')
  }
];

function renderMessages(messages) {
  const messageContainer = document.querySelector('.message-container');
  messageContainer.innerHTML = '';

  messages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${message.sender}`;
    messageElement.innerHTML = `
      <p class="message-content">${message.content}</p>
      <span class="message-timestamp">${message.timestamp.toLocaleTimeString()}</span>
    `;

    messageContainer.appendChild(messageElement);
  });

  // Scroll to the bottom of the chat
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Render the sample chat data
renderMessages(sampleChats);

const messageForm = document.querySelector('.message-form');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const messageInput = document.querySelector('.message-input');
  const messageContent = messageInput.value.trim();

  if (!messageContent) {
    return;
  }

  // Add the new message to the sample chat data
  sampleChats.push({
    sender: 'me',
    content: messageContent,
    timestamp: new Date()
  });

  // Re-render the messages
  renderMessages(sampleChats);

  // Clear the input field
  messageInput.value = '';
});
