// cotizador

function Seguro() {}

const max = new Date().getFullYear(),
  min = max - 21;
const selectYears = document.getElementById("anio");
for (let i = max; i > min; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectYears.appendChild(option);
}
