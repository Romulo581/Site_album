  // Caminhos relativos às imagens da pasta "imagens/"
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

    // Posição horizontal aleatória
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    document.body.appendChild(img);

    // Remove a imagem após a animação (12 segundos)
    setTimeout(() => img.remove(), 12000);
  }

  // Cria uma nova imagem flutuante a cada 1 segundo
  setInterval(createFloatingImage, 1200);
  //corações no header
  const imageList = [
      './img/corações/cora1.png'
    ];

    function showMovingImage() {
      const img = document.createElement('img');
      img.src = imageList[Math.floor(Math.random() * imageList.length)];
      img.className = 'moving-img';

      const header = document.getElementById('header');
      header.appendChild(img);

      // Remove a imagem após a animação (10s)
      setTimeout(() => img.remove(), 10000);
    }

    // Mostra uma nova imagem a cada 12 segundos
    setInterval(showMovingImage, 1000);

    // Começa imediatamente com a primeira
    showMovingImage();

    //carroceu

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

  // Inicia o carrossel
  showSlide(currentIndex);
  interval = setInterval(nextSlide, intervalTime);
})();


  // play-list musical
  const playlist =[
    'musica/Belo_Perfume.mp3',
    'musica/Pitty_Equalize.mp3',
    'musica/Extreme_More_Than_Words.mp3'
  ];
  const player = document.getElementById('player');
  let index = 0;

  function playNext(){
    if(index >= playlist.length) index = 0;
    player.src = playlist[index];
    player.play().catch(() => {
      console.log('Reprodução Bloqueada. Esperando interação do usuario.');
    });
    index++;
  }

  player.addEventListener('ended', playNext);

  window.addEventListener('load', playNext);