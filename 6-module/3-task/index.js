import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    this.initCarousel();
  }
  render() {
    return createElement(`
  <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">` +
        this.slides.map((slide) => `
      <div class="carousel__slide" data-id=${slide.id}>
        <img src="/assets/images/carousel/${
          slide.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>`).join("") + `
    </div>
  </div>`
    );
  }

  initCarousel() {
    const arrowRight = this.elem.querySelector(".carousel__arrow_right");
    const arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const carousel = this.elem.querySelector(".carousel__inner");
    const slidesQtty = carousel.querySelectorAll(".carousel__slide").length;
    let position = 0;
    arrowLeft.style.display = "none";
    arrowLeft.addEventListener("click", () => {
      position = position + carousel.offsetWidth;
      carousel.style.transform = `translateX(${position}px)`;
      arrowRight.style.display = "";
      position == 0
        ? (arrowLeft.style.display = "none")
        : (arrowLeft.style.display = "");
    });
    arrowRight.addEventListener("click", () => {
      position = position - carousel.offsetWidth;
      carousel.style.transform = `translateX(${position}px)`;
      arrowLeft.style.display = "";
      position == carousel.offsetWidth * (1 - slidesQtty)
        ? (arrowRight.style.display = "none")
        : (arrowRight.style.display = "");
    });
    carousel.addEventListener("click", this.onClick);
  }

  onClick(event) {
    if (event.target.closest("button.carousel__button")) {
      const id = event.target.closest("div.carousel__slide").dataset.id;
      const userEvent = new CustomEvent("product-add", {
        detail: id,
        bubbles: true,
      });
      this.dispatchEvent(userEvent);
    }
  }
}
