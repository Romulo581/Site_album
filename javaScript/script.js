// Corações flutuantes
const imageSources = [
  './img/corações/img1.png',
  './img/corações/img2.png',
  './img/corações/img3.png',
  './img/corações/img4.png',
  './img/corações/img5.png',
  './img/corações/img6.png',
  './img/corações/img7.png',
  './img/corações/img8.png'
];

function createFloatingImage() {
  const img = document.createElement('img');
  img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
  img.className = 'floating-image';
  img.style.left = `${Math.random() * window.innerWidth}px`;
  img.style.top = `${window.innerHeight}px`;
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 12000);
}
setInterval(createFloatingImage, 1200);

// Header animado
const imageList = ['./img/corações/cora1.png'];
function showMovingImage() {
  const img = document.createElement('img');
  img.src = imageList[Math.floor(Math.random() * imageList.length)];
  img.className = 'moving-img';
  img.style.height = '20px';
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

  showSlide(currentIndex);
  interval = setInterval(nextSlide, intervalTime);

  // Ajuste para imagens no redimensionamento
  window.addEventListener('resize', () => {
    const imgs = document.querySelectorAll('.slide img');
    imgs.forEach(img => {
      img.style.width = '100vw';
      img.style.height = '100vh';
      img.style.objectFit = 'cover';
    });
  });
})();

// Playlist
const playlist = [
  'musica/Belo_Perfume.mp3',
  'musica/Pitty_Equalize.mp3',
  'musica/Extreme_More_Than_Words.mp3'
];

const player = document.getElementById('player');
let index = 0;

function playNext() {
  if (index >= playlist.length) index = 0;
  player.src = playlist[index];
  player.play().catch(() => {
    console.log('Reprodução bloqueada até interação do usuário.');
  });
  index++;
}

player.addEventListener('ended', playNext);
window.addEventListener('load', playNext);
