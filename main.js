import chatbotSteps from './chatbot.js';

const chatWindow = document.getElementById('chat-window');
const optionsDiv = document.getElementById('options');
let currentStep = 'step1';

function renderStep(stepKey) {
  chatWindow.innerHTML += `<div class="message bot">${chatbotSteps[stepKey].message.replace(/\n/g, '<br>')}</div>`;
  optionsDiv.innerHTML = '';

  chatbotSteps[stepKey].options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.label;
    btn.addEventListener('click', () => selectOption(opt));
    optionsDiv.appendChild(btn);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function selectOption(opt) {
  chatWindow.innerHTML += `<div class="message user">${opt.label}</div>`;
  currentStep = opt.next;
  setTimeout(() => renderStep(currentStep), 300);
}

// Initialize
renderStep(currentStep);
