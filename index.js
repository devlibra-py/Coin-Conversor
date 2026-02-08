const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues(event) {
  event.preventDefault();

  const inputCorrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValue = document.querySelector(".currency-value");

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCorrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(inputCorrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCorrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImagem = document.querySelector(".currency-img");
  //   const currencyValue = document.querySelector(".currency-value");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImagem.src = "./assets/estados-unidos.png";
    // currencyValue.innerHTML = "US$ 0.00";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImagem.src = "./assets/euro.png";
    // currencyValue.innerHTML = "€ 0.00";
  }

  convertValues(event);
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
