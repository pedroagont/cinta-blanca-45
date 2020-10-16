const dino = document.querySelector('.dino');
const juego = document.querySelector('.juego');

function handleJump(e) {
  console.log(e); // espacio hace e.key = ' ' o también se puede hacer con e.code = 'Space'
  if (e.code == 'Space') {
    dino.style.top = '150px';
    setTimeout(() => dino.style.top = '250px', 800);
  }
}

function generateCactus() {
  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  juego.appendChild(cactus);
  for (let i = 550; i >= 0; i--) {
    setTimeout(() => {
      cactus.style.left = i + 'px';
    }, 20);
  }
  setTimeout(() => juego.removeChild(cactus), 900)
}

setInterval(generateCactus, 1000);

window.addEventListener('keydown', handleJump)
