const StatestikContainer = document.querySelector(".statestik");
const app = {};

app.init = async () => {
  fetch("https://onedayviborg.webmcdm.dk/api/moments")
    .then((response) => response.json())
    .then((data1) => {
      return fetch("https://onedayviborg.webmcdm.dk/api/moments/pictures")
        .then((response) => response.json())
        .then((data2) => {
          console.log(data1.length, data2.length);
          StatestikContainer.innerHTML = `<h1>2022 Statestiker</h1>
          <p>${data1.length}. Profiler</p><p>${data2.length}. Billeder</p>`;
        });
    });
};

app.init();
