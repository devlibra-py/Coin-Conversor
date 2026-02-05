const convertButton = document.querySelector(".convert-button");

function convertValues() {
  const inputCorrencyValue = document.querySelector(".input-currency").value;

  const dolarToday = 5.2;

  const convertedValue = inputCorrencyValue / dolarToday;

  console.log(convertedValue);
}

convertButton.addEventListener("click", convertValues);
