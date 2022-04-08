let lastKey;

const rectangularColision = ({ r1, r2 }) => {
  return (
    r1.attackBox.position.x + r1.attackBox.width >= r2.position.x &&
    r1.attackBox.position.x <= r2.position.x + r2.width &&
    r1.attackBox.position.y + r1.attackBox.height >= r2.position.y &&
    r1.attackBox.position.y <= r2.position.y + r2.height
  );
};

const determineWinner = ({ player, enemy, timerId }) => {
  clearTimeout(timerId);
  resultDisplay.style.display = "flex";
  if (player.health === enemy.health) {
    resultDisplay.innerHTML = "Tie";
  } else if (player.health > enemy.health) {
    resultDisplay.innerHTML = "Player 1 Wins";
  } else if (player.health < enemy.health) {
    resultDisplay.innerHTML = "Player 2 Wins";
  }
};

let timer = 60;
let timerId;
const decreaseTimer = () => {
  if (timer > 0) {
    timer--;
    timerDisplay.innerHTML = timer;
    timerId = setTimeout(decreaseTimer, 1000);
  }
  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
};
