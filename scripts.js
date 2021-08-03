
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    console.log(dolar)
    console.log(euro)

    let inputvalorEmReais = Number(document.getElementById("input").value)

    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputvalorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro"){
        let valorEmEuros = inputvalorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-De', {style: 'currency', currency: 'EUR'})
    }



    textoReal.innerHTML = inputvalorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

//Essa função é resnposável para trocar a bandeira e o nome da moedas
function TrocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")
    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"
    }
    else if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Euro.png"
    }
    ConverterMoedas()
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", TrocaDeMoeda)
//console.log(valorEmDolares.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}))