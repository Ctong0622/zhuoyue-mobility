// Home page: render the 3 featured vehicle cards
document.addEventListener("DOMContentLoaded", renderFeaturedVehicles);
document.addEventListener("langchange", renderFeaturedVehicles);

function renderFeaturedVehicles() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  const featured = VEHICLES.filter((v) => v.featured);
  grid.innerHTML = featured.map((v) => renderCarCard(v, true)).join("");
}
