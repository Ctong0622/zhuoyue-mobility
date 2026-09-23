// Cars page: render the full vehicle grid (no filters/sorting per PRD)
document.addEventListener("DOMContentLoaded", renderAllVehicles);
document.addEventListener("langchange", renderAllVehicles);

function renderAllVehicles() {
  const grid = document.getElementById("car-grid");
  if (!grid) return;

  grid.innerHTML = VEHICLES.map((v) => renderCarCard(v, true)).join("");
}
