// Seleciona os elementos do jogo
const game = document.querySelector('.game');
const player1 = document.querySelector('.player1');
const portal = document.querySelector('.portal');
const morro = document.querySelector('.morro');
const vine = document.querySelector('.vine');

// Inicializa as posições dos jogadores se ainda não tiverem valores definidos
if (!player1.style.top) player1.style.top = '85%';
if (!player1.style.left) player1.style.left = '0px';

// Função para movimentar os jogadores
function movePlayers(event) {
  const playerSpeed = 10;

  // Pega a posição atual dos jogadores
  let top = parseInt(player1.style.top);
  let left = parseInt(player1.style.left);

  if (event.key === 'w') {
    player1.style.top = (top - playerSpeed) + 'px';
  } else if (event.key === 's') {
    player1.style.top = (top + playerSpeed) + 'px';
  } else if (event.key === 'a') {
    player1.style.left = (left - playerSpeed) + 'px';
  } else if (event.key === 'd') {
    player1.style.left = (left + playerSpeed) + 'px';
  }

  adjustGamePosition(); // Chama a função para ajustar a posição do jogo
}

// Função para ajustar a posição da tela de jogo quando os jogadores se aproximarem das bordas
function adjustGamePosition() {
  const playerSpeed = 10;
  const gameWidth = game.offsetWidth;
  const gameHeight = game.offsetHeight;

  // Obtém as posições dos jogadores (certifique-se de que as posições existam)
  const player1PositionX = parseInt(player1.style.left);
  const player1PositionY = parseInt(player1.style.top);

  // Ajuste do jogo se o jogador atingir as bordas
  if (player1PositionX < 0) {
    game.style.left = (parseInt(game.style.left) + playerSpeed) + 'px'; // Move o jogo para a direita
  } else if (player1PositionX + player1.offsetWidth > gameWidth) {
    game.style.left = (parseInt(game.style.left) - playerSpeed) + 'px'; // Move o jogo para a esquerda
  }

  if (player1PositionY < 0) {
    game.style.top = (parseInt(game.style.top) + playerSpeed) + 'px'; // Move o jogo para baixo
  } else if (player1PositionY + player1.offsetHeight > gameHeight) {
    game.style.top = (parseInt(game.style.top) - playerSpeed) + 'px'; // Move o jogo para cima
  }
}

// Adiciona o evento para movimentar os jogadores
document.addEventListener('keydown', movePlayers);
