  // Caminhos relativos às imagens da pasta "imagens/"
  const imageSources = [
    '../img/corações/img1.png',
    '../img/corações/img2.png',
    '../img/corações/img3.png',
    '../img/corações/img4.png',
    '../img/corações/img5.png',
    '../img/corações/img6.png',
    '../img/corações/img7.png',
    '../img/corações/img8.png'
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
      '../img/corações/cora1.png'
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

     (function(){
    const carousel = document.getElementById('myCarousel');
    const images = carousel.querySelectorAll('.myCarousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const intervalTime = 4000;
    let interval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    prevBtn.addEventListener('click', () => {
      prevImage();
      resetInterval();
    });

    nextBtn.addEventListener('click', () => {
      nextImage();
      resetInterval();
    });

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextImage, intervalTime);
    }

    interval = setInterval(nextImage, intervalTime);
  })();