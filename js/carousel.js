import service from "./service.js";
import { renderCarousel } from "./tmpl.js";
const app = {};
app.init = async () => {
  let carousels = await service.getCarousels();
  const carouselsContainer = document.querySelector(".carousel-inner");
  carousels.forEach((item, index) => {
    const modifiedItem = {
      ...item,
      time: item.time.replace(":", "-"),
      urlName: item.urlName.replace(/aa|oe/g, (match) =>
        match === "aa" ? "å" : "ø"
      ),
    };
    carouselsContainer.insertAdjacentHTML(
      "beforeend",
      renderCarousel(modifiedItem, index)
    );
  });
};

app.init();
