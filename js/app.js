// cotizador
function Secure(Brand, Year, Type) {
  this.brand = Brand;
  this.year = Year;
  this.type = Type;
}

Secure.prototype.quotationSecure = function (information) {
  /*brand */
  let american = 1.15;
  let asian = 1.05;
  let european = 1.35;
  /*brand */
  let quantity;
  const base = 2000;

  switch (this.brand) {
    case "1":
      quantity = base * american;
      break;
    case "2":
      quantity = base * asian;
      break;
    case "3":
      quantity = base * european;
      break;
  }
  //3% depreciates each year
  const difference = new Date().getFullYear() - this.year;
  quantity -= (difference * 3 * quantity) / 100;
  /* if secure is basic multiply 30%
      if secure is complete  50% more */
  if (this.type === "basico") {
    quantity *= 1.3;
  } else {
    quantity *= 1.5;
  }

  return quantity;
};
//control ui
function Interfase() {}
//show Error
Interfase.prototype.showMessage = function (message, type) {
  const div = document.createElement("div");
  const before = document.querySelector(".form-group");

  if (type === "error") {
    div.classList.add("message", "error");
  } else {
    div.classList.add("message", "ok");
  }
  div.innerHTML = `${message}`;
  form.insertBefore(div, before);

  setTimeout(function () {
    document.querySelector(".message").remove();
  }, 3000);
};
//show result
Interfase.prototype.showResult = function (secure, quantity) {
  const result = document.getElementById("resultado");
  let brand;
  switch (secure.brand) {
    case "1":
      brand = "Americano";
      break;
    case "2":
      brand = "Asitico";
      break;
    case "3":
      brand = "Europeo";
      break;
  }
  const div = document.createElement("div");
  div.innerHTML = `
    <p class="header"> Tu resumen :</p>
    <p> Marca: ${brand}</p>
    <p> Año: ${secure.year}</p>
    <p> Tipo: ${secure.type}</p>
    <hr>
    <p><strong> total:${quantity}</strong></p>
  `;

  const spinner = document.querySelector("#cargando img");
  spinner.style.display = "block";
  setTimeout(function () {
    spinner.style.display = "none";
    result.appendChild(div);
  }, 3000);
};
//EventListener
const form = document.getElementById("cotizar-seguro");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //select Brand
  const brand = document.getElementById("marca");
  const brandSelected = brand.options[brand.selectedIndex].value;

  //select Year
  const year = document.getElementById("anio");
  const yearSelected = year.options[year.selectedIndex].value;

  //selet type
  const type = document.querySelector('input[name="tipo"]:checked').value;

  //create instans interfase
  const interfase = new Interfase();

  //check input no empty
  if (brandSelected === "" || yearSelected === "" || type === "") {
    interfase.showMessage(
      "Faltan datos, revisa el formulario y prueba de nuevo",
      "error"
    );
  } else {
    //clear div
    const result = document.querySelector("#resultado div");
    if (result != null) {
      result.remove();
    }
    interfase.showMessage("Cotizando...", "ok");
    //quotation
    const secure = new Secure(brandSelected, yearSelected, type);
    const quantity = secure.quotationSecure(secure);
    //show result
    interfase.showResult(secure, quantity);
  }
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
