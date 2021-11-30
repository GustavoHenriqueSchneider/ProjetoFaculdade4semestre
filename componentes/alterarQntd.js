import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { calcularTotalItem } from "./carregarDados.js"
import { loadingPanel } from "./loading.js"

export const aumentarQntd = (parent) => {
    let campoQntd = parent.querySelector('.qntd')
    let quantidade = parseInt(campoQntd.textContent, 10)

    if (quantidade < 100)
        quantidade++

    campoQntd.textContent = quantidade
}

export const diminuirQntd = (parent) => {
    let campoQntd = parent.querySelector('.qntd')
    let quantidade = parseInt(campoQntd.textContent, 10)

    if (quantidade > 1){
        quantidade--
        campoQntd.textContent = quantidade
        return quantidade
    }

    return --quantidade
}

export const aumentarQntdCarrinho = (parent) => {

    const plano = parent.parentNode.querySelector('.plano').textContent

    aumentarQntd(parent)
    adicionarCarrinho(parent, plano, true)
    loadingPanel(calcularTotalItem, parent, plano)
}

export const diminuirQntdCarrinho = (parent) => {

    const plano = parent.parentNode.querySelector('.plano').textContent

    const quantidade = diminuirQntd(parent)
    
    if (quantidade >= 1){
        adicionarCarrinho(parent, plano, true)
        loadingPanel(calcularTotalItem, parent, plano)
    }   
}