import { diminuirQntd } from "./componentes/alterarQntd.js"
import { aumentarQntd } from "./componentes/alterarQntd.js"
import { adicionarCarrinho } from "./componentes/adicionarCarrinho.js"
import { quantidadeCarrinho } from "./componentes/carregarDados.js"

const btnDiminuirQntd = document.querySelectorAll('.diminuirQntd')
const btnAumentarQntd = document.querySelectorAll('.aumentarQntd')
const btnAdicionarCarrinho = document.querySelectorAll('.adicionarCarrinho')

quantidadeCarrinho()

for(let btn of btnDiminuirQntd){
    btn.addEventListener('click', () => {
        diminuirQntd(btn.parentNode)
    })
}

for(let btn of btnAumentarQntd){
    btn.addEventListener('click', () => {
        aumentarQntd(btn.parentNode)
    })
}

for(let btn of btnAdicionarCarrinho){
    btn.addEventListener('click', () => {
        adicionarCarrinho(btn.parentNode.parentNode)
    })
}