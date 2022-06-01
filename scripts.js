const button = document.getElementById('button-convert')
const select = document.getElementById('currency-select')
const dolar = 4.79
const euro = 5.14
const bitcoin = 0.0000071


const convertValue = () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const currencyValue = document.getElementById('currency-value')



  realValueText.innerHTML = new Intl.NumberFormat('PT-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais)

  if (select.value === 'US$ Dolar Americano') {

    currencyValue.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar)
  }
  if (select.value === 'Є Euro') {
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro)
  }
  if (select.value === 'Bitcoin') {
    currencyValue.innerHTML = new Intl.NumberFormat('BTC',
      { style: 'currency', currency: 'BTC' }
    ).format(inputReais / bitcoin)
  }
}


changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")


  if (select.value === 'Є Euro') {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./imagens/Design sem nome 1.jpg"
  }

  if (select.value === 'US$ Dolar Americano') {
    currencyName.innerHTML = "Dolar Americano"
    currencyImg.src = "./imagens/estados-unidos (1) 1.jpg"
  }
  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./imagens/Design sem nome (1) 1.png"
  }
  convertValue()

}



button.addEventListener('click', convertValue)
select.addEventListener("change", changeCurrency)