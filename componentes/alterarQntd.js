import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { calcularTotalItem } from "./carregarDados.js"

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

    if (quantidade > 1)
        quantidade--

    campoQntd.textContent = quantidade
}

export const aumentarQntdCarrinho = (parent) => {

    const plano = parent.parentNode.querySelector('.plano').textContent

    aumentarQntd(parent)
    adicionarCarrinho(parent, plano, true)
    calcularTotalItem(parent, plano)
}

export const diminuirQntdCarrinho = (parent) => {

    const plano = parent.parentNode.querySelector('.plano').textContent

    diminuirQntd(parent)
    adicionarCarrinho(parent, plano, true)
    calcularTotalItem(parent, plano)
}