function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const carousel = document.querySelector(".carousel__inner");
  const slidesQtty = carousel.querySelectorAll(".carousel__slide").length;
  const wid = carousel.offsetWidth;
  let position = 0;
  arrowLeft.style.display = "none";
  arrowLeft.addEventListener("click", () => {
    position = position + wid;
    carousel.style.transform = `translateX(${position}px)`;
    arrowRight.style.display = "";
    position == 0
      ? (arrowLeft.style.display = "none")
      : (arrowLeft.style.display = "");
  });
  arrowRight.addEventListener("click", () => {
    position = position - wid;
    carousel.style.transform = `translateX(${position}px)`;
    arrowLeft.style.display = "";
    position == wid * (1 - slidesQtty)
      ? (arrowRight.style.display = "none")
      : (arrowRight.style.display = "");
  });
}
