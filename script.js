const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
const box = 32;

function criarFundo() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, canvas.width, canvas.width);
}

criarFundo();
