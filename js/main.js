// Shared init for all pages: language toggle + active nav link
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initLangToggle();
  highlightActiveNavLink();
});

function highlightActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
}

function availabilityKey(availability) {
  return availability.toLowerCase();
}

// Builds one vehicle card. `withRentLink` controls whether the button
// navigates to rent.html?vehicle=<id> or is omitted (used on Home page).
function renderCarCard(vehicle, withRentLink) {
  const availKey = availabilityKey(vehicle.availability);
  const typeLabel = t(vehicle.type === "SUV" ? "type.suv" : "type.sedan");
  const rentButton = withRentLink
    ? `<a class="btn btn-primary" href="rent.html?vehicle=${encodeURIComponent(vehicle.id)}" data-i18n="cars.rentBtn">${t("cars.rentBtn")}</a>`
    : "";

  return `
    <article class="car-card">
      <div class="car-photo">${vehicle.model}</div>
      <div class="car-body">
        <h3 class="car-model">${vehicle.model}</h3>
        <span class="availability ${availKey}">${t("availability." + availKey)}</span>
        <div class="car-meta">
          <span>${typeLabel}</span>
          <span>${vehicle.seats} ${t("cars.seats")}</span>
          <span>${vehicle.rangeKm} ${t("cars.rangeUnit")}</span>
        </div>
        <div class="car-price">¥${vehicle.pricePerDay} ${t("cars.perDay")}</div>
        ${withRentLink ? `<div class="car-actions">${rentButton}</div>` : ""}
      </div>
    </article>
  `;
}
