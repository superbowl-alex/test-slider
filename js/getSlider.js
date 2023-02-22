(() => {
  const ELEMENTS = {
    sliderWrap: document.querySelector(`[data-js="slider-wrap"]`),
    sliderList: document.querySelector(`[data-js="slider-list"]`),
    dotsNavigation: document.querySelector(`[data-glide-el="controls[nav]"]`),
  };
  const arrayImages = [
    "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904__340.jpg",
    "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_640.jpg",
    "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_640.jpg",
    "https://cdn.pixabay.com/photo/2023/01/05/22/35/flower-7700011_640.jpg",
    "https://cdn.pixabay.com/photo/2023/02/04/09/20/castle-7766794__340.jpg",
    "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830__340.jpg",
    "https://cdn.pixabay.com/photo/2023/02/13/18/00/bird-7787970__340.jpg",
    "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210__340.jpg",
    "https://cdn.pixabay.com/photo/2023/02/09/16/36/bridge-7779222__340.jpg",
    "https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233__340.jpg",
    "https://cdn.pixabay.com/photo/2023/02/08/08/50/frequency-wave-7776034__340.jpg",
    "https://cdn.pixabay.com/photo/2023/01/21/13/39/night-sky-7733876__340.jpg",
    "https://cdn.pixabay.com/photo/2023/01/08/16/30/castle-7705682__340.jpg",
    "https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722__340.jpg",
    "https://cdn.pixabay.com/photo/2022/03/11/10/55/couple-7061929__340.jpg",
    "https://cdn.pixabay.com/photo/2022/10/25/19/55/beach-7546731__340.jpg",
    "https://cdn.pixabay.com/photo/2022/04/13/15/21/beach-7130484__340.jpg",
    "https://cdn.pixabay.com/photo/2022/11/16/16/56/city-7596379__340.jpg",
  ];
  arrayImages.map((item, index) => {
    ELEMENTS.sliderList.insertAdjacentHTML(
      "beforeend",
      `<li class="glide__slide">
         <img src="" data-src=${item} data-id="${index}" class="glide__image" alt="Image description" />
       </li>`
    );
    ELEMENTS.dotsNavigation.insertAdjacentHTML(
      "beforeend",
      `<button class="glide__bullet" data-id="${index}" data-glide-dir="=${index}">${index}</button>`
    );
  });

  const config = {
    perView: 3,
    gap: 20,
    bound: true,
  };
  let glide = new Glide(".glide", config);

  let i = 1;

  glide.on(["mount.after"], function () {
    const countLoadedSlides = glide.settings.perView + 1;
    loadingImages(countLoadedSlides);
  });

  glide.on(["run.after"], function () {
    const nextPosition = glide.index + glide.settings.perView;
    const nextSlide = document.querySelector(`img[data-id="${nextPosition}"]`);
    if (nextSlide) {
      nextSlide.src = nextSlide.dataset.src;
    }
  });

  const bullets = document.querySelectorAll(".glide__bullet");
  if (bullets) {
    bullets.forEach((item) => {
      item.addEventListener("click", makeVisibleSlides);
    });
  }

  function makeVisibleSlides(e) {
    e.preventDefault();
    const targetSlideId = +e.target.dataset.id + glide.settings.perView;
    loadingImages(targetSlideId);
  }

  function loadingImages(pos) {
    for (let j = 0; j < pos; j++) {
      const currentSlide = document.querySelector(`img[data-id="${j}"]`);
      if (currentSlide) {
        currentSlide.src = currentSlide.dataset.src;
      }
    }
  }

  glide.mount();
})();
