const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
let cubo = 32;
let cobra = [];
cobra[0] = {
  x: 8 * cubo,
  y: 8 * cubo,
};
let direcao = 'direita';

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

function jogar() {
  criarFundo();
  criarCobra();
  let cobrax = cobra[0].x;
  let cobray = cobra[0].y;
  if (direcao === 'direita') cobrax += cubo;
  if (direcao === 'esquerda') cobrax -= cubo;
  if (direcao === 'acima') cobrax -= cubo;
  if (direcao === 'abaixo') cobrax += cubo;

  cobra.pop();

  let cabeca = {
    x: cobrax,
    y: cobray,
  };

  cobra.unshift(cabeca);
}

let jogo = setInterval(jogar, 100);
