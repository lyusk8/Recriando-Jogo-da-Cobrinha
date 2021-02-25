const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
let cubo = 32;
let cobra = [];
cobra[0] = {
  x: 8 * cubo,
  y: 8 * cubo,
};

let direcao;

let apple = {
  x: Math.floor(Math.random() * 15 + 1) * cubo,
  y: Math.floor(Math.random() * 15 + 1) * cubo,
};

function criarFundo() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function criarCobra() {
  context.fillStyle = 'green';
  for (let i = 0; i < cobra.length; i++) {
    context.fillRect(cobra[i].x, cobra[i].y, cubo, cubo);
  }
}

function maca() {
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, cubo, cubo);
}

document.addEventListener('keydown', update);

function update(e) {
  if (e.keyCode === 37 && direcao != 'direita') direcao = 'esquerda';
  if (e.keyCode === 38 && direcao != 'abaixo') direcao = 'acima';
  if (e.keyCode === 39 && direcao != 'esquerda') direcao = 'direita';
  if (e.keyCode === 40 && direcao != 'acima') direcao = 'abaixo';
}

function jogar() {
  if (cobra[0].x > 15 * cubo && direcao === 'direita') cobra[0].x = 0;
  if (cobra[0].x < 0 && direcao === 'esquerda') cobra[0].x = 15 * cubo;
  if (cobra[0].y > 15 * cubo && direcao === 'abaixo') cobra[0].y = 0;
  if (cobra[0].y < 0 && direcao === 'acima') cobra[0].y = 15 * cubo;

  for (let i = 1; i < cobra.length; i++) {
    if (cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y) {
      clearInterval(jogo);
      alert('Game Over :(');
    }
  }

  criarFundo();
  criarCobra();
  maca();

  let cobrax = cobra[0].x;
  let cobray = cobra[0].y;
  if (direcao === 'direita') cobrax += cubo;
  if (direcao === 'esquerda') cobrax -= cubo;
  if (direcao === 'acima') cobray -= cubo;
  if (direcao === 'abaixo') cobray += cubo;
  if (cobrax != apple.x || cobray != apple.y) {
    cobra.pop();
  } else {
    apple.x = Math.floor(Math.random() * 15 + 1) * cubo;
    apple.y = Math.floor(Math.random() * 15 + 1) * cubo;
  }

  let cabeca = {
    x: cobrax,
    y: cobray,
  };

  cobra.unshift(cabeca);
}

let jogo = setInterval(jogar, 300);
