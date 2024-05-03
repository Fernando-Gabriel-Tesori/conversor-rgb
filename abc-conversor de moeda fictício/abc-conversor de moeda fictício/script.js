document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.querySelector(".convert-button");
  const currencySelect = document.querySelector(".currency-select");
  const baseCurrencySelect = document.querySelector(".base-currency");

  convertButton.addEventListener("click", convertValues);
  currencySelect.addEventListener("change", changeCurrency);

  function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValue = document.querySelector(".currency-value");

    if (isNaN(inputCurrencyValue)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value === "dolar") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value === "euro") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
      }).format(inputCurrencyValue / euroToday);
    }

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue);
  }

  function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
      currencyName.innerHTML = "Dólar Americano";
      currencyImg.src = "./imgs/dolar.jpg";
    }

    if (currencySelect.value === "euro") {
      currencyName.innerHTML = "Euro";
      currencyImg.src = "./imgs/euro.jpg";
    }

    // Chame a função para definir uma nova cor de fundo ao trocar a moeda
    setRandomBackgroundColor();
  }

  function setRandomBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
});
