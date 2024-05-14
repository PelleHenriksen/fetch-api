function renderMoment(item) {
  return `
  <div style="margin-bottom: 100px"><p>${item._id}</p><p>${item.title}</p><p>${item.description}</p><img src="${item.picture}"/><p>${item.created}</p><p>${item.updated}</p>
  </div>
  `;
}

function renderCarousel(item, index) {
  return `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
  <img
    src="${item.picture}"
    class="d-block w-100"
    alt=""
  /> <div class="container">
  <div class="bottom-right">
  <p class="profil">${item.profile.name}</p>
    <p class="title">${item.title}</p>
    <p class="time">${item.time}</p>
    <a href="https://onedayviborg.dk/moments/${item.time}-${
    item.urlName
  }html"  target="_blank">Se Alle Billeder</a>

  </div>
</div>
</div>
  </div>
  `;
}

export { renderMoment, renderCarousel };
