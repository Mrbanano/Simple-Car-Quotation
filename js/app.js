// cotizador
function Seguro(Brand, Year, Type) {
  this.brand = Brand;
  this.year = Year;
  this, (type = Type);
}
//control ui
function Interfase() {}
//EventListener
const form = document.getElementById("cotizar-seguro");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //select Brand
  const brand = document.getElementById("marca");
  const brandSelected = brand.options[brand.selectedIndex].value;
  console.log(brandSelected);

  //select Year
  const year = document.getElementById("anio");
  const yearSelected = year.options[year.selectedIndex].value;
  console.log(yearSelected);
});
//Year dinamic
const max = new Date().getFullYear(),
  min = max - 21;
const selectYears = document.getElementById("anio");
for (let i = max; i > min; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectYears.appendChild(option);
}
