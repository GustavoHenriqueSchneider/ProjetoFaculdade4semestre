import { diminuirQntdCarrinho } from "./componentes/alterarQntd.js"
import { aumentarQntdCarrinho } from "./componentes/alterarQntd.js"
import { removerItemCarrinho } from "./componentes/removerItem.js"
import { itensCarrinho } from "./componentes/carregarDados.js"

itensCarrinho()

const btnDiminuirQntd = document.querySelectorAll('.diminuirQntd')
const btnAumentarQntd = document.querySelectorAll('.aumentarQntd')
const btnRemoverItemCarrinho = document.querySelectorAll('.removerItem')

for(let btn of btnDiminuirQntd){
    btn.addEventListener('click', () => {
        diminuirQntdCarrinho(btn.parentNode)
    })
}

for(let btn of btnAumentarQntd){
    btn.addEventListener('click', () => {
        aumentarQntdCarrinho(btn.parentNode)
    })
}

for(let btn of btnRemoverItemCarrinho){
    btn.addEventListener('click', () => {
        removerItemCarrinho(btn.parentNode.parentNode)
    })
}