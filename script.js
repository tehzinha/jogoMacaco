// Seleciona os elementos do jogo
const game = document.querySelector('.game');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const portal= document.querySelector('.portal');
const morro= document.querySelector('.morro');
const vine=document.querySelector('.vine');

// Função para movimentar os jogadores
function movePlayers(event) {
  const playerSpeed = 10;

  if (event.key === 'w') {
    player1.style = parseInt(player1.style.top) - playerSpeed + 'px';
  } else if (event.key === 's') {
    player1.style = parseInt(player1.style.down) + playerSpeed + 'px';
  } else if (event.key === 'a') {
    player1.style = parseInt(player1.style.left) - playerSpeed + 'px';
  } else if (event.key === 'd') {
    player1.style = parseInt(player1.style.right) + playerSpeed + 'px';

    
  } else if (event.key === 'ArrowUp') {
    player2.style = parseInt(player2.style.top) - playerSpeed + 'px';
  } else if (event.key === 'ArrowDown') {
    player2.style = parseInt(player2.style.down) + playerSpeed + 'px';
  } else if (event.key === 'ArrowLeft') {
    player2.style = parseInt(player2.style.left) - playerSpeed + 'px';
  } else if (event.key === 'ArrowRight') {
    player2.style = parseInt(player2.style.right) + playerSpeed + 'px';
  }
  document.addEventListener('keydown', movePlayers);

  adjustGamePosition(); // Chama a função para ajustar a posição do jogo
}

// Função para ajustar a posição da tela de jogo quando os jogadores se aproximarem das bordas
function adjustGamePosition() {
  const playerSpeed = 10;
  const gameWidth = game.offsetWidth;
  const gameHeight = game.offsetHeight;
  const player1PositionX = parseInt(player1.style.left);
  const player2PositionX = parseInt(player2.style.left);
  const player1PositionY = parseInt(player1.style.top);
  const player2PositionY = parseInt(player2.style.top);

}