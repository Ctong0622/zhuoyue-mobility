// Home page: render the 3 featured vehicle cards
document.addEventListener("DOMContentLoaded", renderFeaturedVehicles);
document.addEventListener("langchange", renderFeaturedVehicles);

function renderFeaturedVehicles() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  // Sort by price so the 4 featured vehicles show a clear low-to-high price progression
  const featured = VEHICLES.filter((v) => v.featured).sort((a, b) => a.priceMin - b.priceMin);
  grid.innerHTML = featured.map((v) => renderCarCard(v, true)).join("");
}
