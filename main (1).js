import chatbotSteps from './chatbot.js';

const landing = document.getElementById('landing');
const chatbot = document.getElementById('chatbot');
const startBtn = document.getElementById('start-chat');
const chatWindow = document.getElementById('chat-window');
const optionsDiv = document.getElementById('options');
let currentStep = 'step1';

// Show chatbot and hide landing
startBtn.addEventListener('click', () => {
  landing.style.display = 'none';
  chatbot.style.display = 'block';
  resetChat();
  renderStep(currentStep);
});

function resetChat() {
  chatWindow.innerHTML = '';
  optionsDiv.innerHTML = '';
}

function renderStep(stepKey) {
  // On first step, clear history
  if (stepKey === 'step1') resetChat();

  // Render bot message
  const msg = document.createElement('div');
  msg.classList.add('message', 'bot');
  msg.innerHTML = chatbotSteps[stepKey].message.replace(/\n/g, '<br>');
  chatWindow.appendChild(msg);

  // Render options
  optionsDiv.innerHTML = '';
  chatbotSteps[stepKey].options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.label;
    btn.onclick = () => selectOption(opt);
    optionsDiv.appendChild(btn);
  });

  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function selectOption(opt) {
  // Show user message
  const userMsg = document.createElement('div');
  userMsg.classList.add('message', 'user');
  userMsg.textContent = opt.label;
  chatWindow.appendChild(userMsg);

  // Next step
  currentStep = opt.next;
  setTimeout(() => renderStep(currentStep), 300);
}
