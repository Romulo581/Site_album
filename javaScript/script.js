// Corações flutuantes
const imageSources = [
  './img/corações/img1.png',
  './img/corações/img2.png',
  './img/corações/img3.png',
  './img/corações/img4.png',
  './img/corações/img5.png',
  './img/corações/img6.png',
  './img/corações/img7.png',
  './img/corações/img8.png',
  './img/corações/img9.png',
  './img/corações/img10.png',
  './img/corações/img11.png',
  './img/corações/img12.png',
  './img/corações/img13.png',
  './img/corações/img14.png',
  './img/corações/img15.png',
  './img/corações/img16.png',
  './img/corações/img17.png',
  './img/corações/img18.png',
  './img/corações/img19.png',
  './img/corações/img20.png',
  './img/corações/img21.png',
  './img/corações/img22.png',
  './img/corações/img23.png',
  './img/corações/img24.png',
  './img/corações/img25.png',
  './img/corações/img26.png',
  './img/corações/img27.png',
  './img/corações/img28.png',
  './img/corações/img29.png',
  './img/corações/img30.png',
  './img/corações/img31.png',
  './img/corações/img32.png',
  './img/corações/img33.png',
  './img/corações/img34.png',
  './img/corações/img35.png',
  './img/corações/img36.png',
  './img/corações/img37.png',
  './img/corações/img38.png',
  './img/corações/img39.png',
  './img/corações/img40.png'
];

function createFloatingImage() {
  const img = document.createElement('img');
  img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
  img.className = 'floating-image';

  // Posição horizontal aleatória
  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight;

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  document.body.appendChild(img);

  // Remove a imagem após a animação (12 segundos)
  setTimeout(() => img.remove(), 15000);
}

// Cria uma nova imagem flutuante a cada 1,2 segundos
setInterval(createFloatingImage, 1000);

// Coração no header
// Header animado
const imageList = ['./img/corações/cora1.png'];
function showMovingImage() {
  const img = document.createElement('img');
  img.src = imageList[Math.floor(Math.random() * imageList.length)];
  img.className = 'moving-img';
  img.style.height = '30px';
  img.style.width = 'auto';
  document.getElementById('header').appendChild(img);
  setTimeout(() => img.remove(), 10000);
}
setInterval(showMovingImage, 1000);
showMovingImage();

// Carrossel
(function () {
  const carousel = document.getElementById('myCarousel');
  const slides = carousel.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const intervalTime = 4000;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);

      if (i === index) {
        const img = slide.querySelector('img');
        if (img) {
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'contain';
          img.style.backgroundColor = 'transparent';
        }
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, intervalTime);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  // Inicia o carrossel
  showSlide(currentIndex);
  interval = setInterval(nextSlide, intervalTime);
})();
const playlist = [
  'musica/Belo_Perfume.mp3',
  'musica/Pitty_Equalize.mp3',
  'musica/Extreme_More_Than_Words.mp3'
];

const player = document.getElementById('player');
const buttonPlay = document.getElementById('buttonPlay'); // Corrigido getElementById
let index = 0;
let unlocked = false;

function playNext() {
  if (index >= playlist.length) index = 0;
  player.src = playlist[index];
  player.play().catch(() => {
    console.log('Reprodução bloqueada até interação do usuário.');
    buttonPlay.innerText = 'Play Music'; // Texto para indicar ação
    unlocked = false; // Corrigido "felse"
  });
  index++;
}

player.addEventListener('ended', playNext);

buttonPlay.addEventListener('click', () => {
  if (!unlocked) {
    player.play().then(() => {
      unlocked = true;
      buttonPlay.innerText = 'Trocar Música';
    }).catch(() => {
      buttonPlay.innerText = 'Play Music';
    });
  } else {
    playNext();
  }
});

// Opcional: define texto inicial no botão
buttonPlay.innerText = 'Play Music';

window.addEventListener('load', playNext);

function ajustarParaViewportReal() {
  const altura = window.innerHeight;
  const carrossel = document.querySelector('.myCarousel-container');
  const botao = document.querySelector('.play_musica');

  if (altura < 360) {
    carrossel.style.marginTop = '50px';
    carrossel.style.height = '45vh';
    botao.style.marginTop = '0px';
  }
}

window.addEventListener('load', ajustarParaViewportReal);
window.addEventListener('resize', ajustarParaViewportReal);

