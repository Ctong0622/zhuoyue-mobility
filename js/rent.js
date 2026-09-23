// Rent/Contact page: populate vehicle dropdown, pre-fill from ?vehicle=, handle submit

// Replace with the real Formspree (or similar) endpoint before going live.
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

document.addEventListener("DOMContentLoaded", () => {
  populateVehicleSelect();
  preselectVehicleFromQuery();
  initFormSubmit();
});
document.addEventListener("langchange", () => {
  const selected = document.getElementById("vehicle-select").value;
  populateVehicleSelect();
  document.getElementById("vehicle-select").value = selected;
});

function populateVehicleSelect() {
  const select = document.getElementById("vehicle-select");
  if (!select) return;

  const placeholder = `<option value="" data-i18n="rent.selectVehiclePlaceholder">${t("rent.selectVehiclePlaceholder")}</option>`;
  const options = VEHICLES.map(
    (v) => `<option value="${v.id}">${v.model} — ¥${v.pricePerDay}${t("cars.perDay")}</option>`
  ).join("");

  select.innerHTML = placeholder + options;
}

function preselectVehicleFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const vehicleId = params.get("vehicle");
  if (!vehicleId) return;

  const select = document.getElementById("vehicle-select");
  if (select && VEHICLES.some((v) => v.id === vehicleId)) {
    select.value = vehicleId;
  }
}

function initFormSubmit() {
  const form = document.getElementById("rent-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.textContent = t("rent.success");
        status.className = "form-status success";
        form.reset();
      } else {
        status.textContent = t("rent.error");
        status.className = "form-status error";
      }
    } catch (err) {
      status.textContent = t("rent.error");
      status.className = "form-status error";
    }
  });
}
