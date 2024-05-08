function renderMoment(item) {
  return `
  <div style="margin-bottom: 100px"><p>${item._id}</p><p>${item.title}</p><p>${item.description}</p><img src="${item.picture}"/><p>${item.created}</p><p>${item.updated}</p>
  </div>
  `;
}

function renderCarousel(item) {
  return `
  
<div class="carousel-item">
  <img
    src="${item.picture}"
    class="d-block w-100"
    alt=""
  />
</div>
  </div>
  `;
}
export { renderMoment, renderCarousel };
