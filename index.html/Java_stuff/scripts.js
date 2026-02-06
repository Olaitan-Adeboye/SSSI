document.addEventListener("DOMContentLoaded", function () {
  const images = [
     "images/H1.jpg",
  "images/H2.jpg",
  "images/H3.jpg",
  "images/H4.jpg",
  "images/H5.jpg",
  "images/H6.jpg"
  ];

  const slides = document.querySelectorAll(".slideshow-container .slide");

  // preload
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === i) {
        slide.style.backgroundImage = `url('${images[i]}')`;
        slide.classList.add("active");
      }
    });
  }

  // init
  showSlide(index);

  setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
  }, 5000);
});
