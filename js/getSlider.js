(() => {
  const ELEMENTS = {
    sliderWrap: document.querySelector(`[data-js="slider-wrap"]`),
    sliderList: document.querySelector(`[data-js="slider-list"]`),
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
  arrayImages.map((item) => {
    ELEMENTS.sliderList.insertAdjacentHTML(
      "beforeend",
      `<li class="glide__slide">
         <img src=${item} class="glide__image" loading="lazy" alt="Image description" />
       </li>`
    );
  });
  const config = {
    perView: 3,
    gap: 20,
    bound: true,
  };
  new Glide(".glide", config).mount();
})();
