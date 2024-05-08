import service from "./service.js";
import { renderCarousel } from "./tmpl.js";
const app = {};
app.init = async () => {
  let carousels = await service.getCarousels();
  const carouselsContainer = document.querySelector(".carousel-inner");
  carousels.forEach((carousels) => {
    carouselsContainer.insertAdjacentHTML(
      "beforeend",
      renderCarousel(carousels)
    );
  });
};

app.init();
