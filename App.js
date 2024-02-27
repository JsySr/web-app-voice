const startBtn = document.getElementById('startBtn');
const orderResult = document.getElementById('orderResult');

startBtn.addEventListener('click', () => {
  startRecognition();
});

function startRecognition() {
  const recognition = new webkitSpeechRecognition() || SpeechRecognition();
  recognition.lang = 'es-ES';

  recognition.onresult = function(event) {
    const last = event.results.length - 1;
    const recognizedOrder = event.results[last][0].transcript;
    displayOrder(recognizedOrder);
  }

  recognition.start();
}

function displayOrder(order) {
  orderResult.innerHTML = `<p>Orden reconocida: <strong>${order}</strong></p>`;
}
