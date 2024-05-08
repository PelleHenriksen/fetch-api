import service from "./service.js";
import { renderMoment } from "./tmpl.js";
const app = {};
app.init = async () => {
  let moments = await service.getMoments();
  const momentsContainer = document.querySelector(".output");
  moments.forEach((moments) => {
    momentsContainer.insertAdjacentHTML("beforeend", renderMoment(moments));
  });
};

app.init();
