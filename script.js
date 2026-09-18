const button = document.querySelector('#sprinkleButton');
const layer = document.querySelector('#sprinkleLayer');
const colors = ['#f37da5', '#ffd161', '#8fc9af', '#8c6ad2', '#f08b53', '#fff4d4'];

function makeSprinkles() {
  for (let index = 0; index < 120; index += 1) {
    const sprinkle = document.createElement('span');
    sprinkle.className = 'sprinkle';
    sprinkle.style.left = `${Math.random() * 100}vw`;
    sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sprinkle.style.setProperty('--duration', `${2.1 + Math.random() * 1.8}s`);
    sprinkle.style.setProperty('--drift', `${-120 + Math.random() * 240}px`);
    sprinkle.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    sprinkle.style.animationDelay = `${Math.random() * .45}s`;
    layer.appendChild(sprinkle);
    sprinkle.addEventListener('animationend', () => sprinkle.remove());
  }
}

button.addEventListener('click', makeSprinkles);
