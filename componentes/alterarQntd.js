import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { calcularTotalItem } from "./carregarDados.js"

export const aumentarQntd = async (parent, quantidade) => {
    let campoQntd = parent.querySelector('.qntd')

    if(!quantidade)
        quantidade = parseInt(campoQntd.textContent, 10)

    if (quantidade < 100) {
        quantidade++
        campoQntd.textContent = quantidade
        return quantidade
    }

    return ++quantidade
}

export const diminuirQntd = async (parent, quantidade) => {
    let campoQntd = parent.querySelector('.qntd')

    if(!quantidade)
        quantidade = parseInt(campoQntd.textContent, 10)

    if (quantidade > 1) {
        quantidade--
        campoQntd.textContent = quantidade
        return quantidade
    }

    return --quantidade
}

export const aumentarQntdCarrinho = async (parent) => {

    const carrinho = JSON.parse(sessionStorage.getItem('carrinho'))

    const plano = parent.parentNode.querySelector('.plano').textContent

    const quantidade = await aumentarQntd(parent, carrinho.planos[plano].quantidade)

    if (quantidade < 100) {
        await adicionarCarrinho(parent, plano, true)
        await calcularTotalItem(parent, plano)
    }

    return quantidade
}

export const diminuirQntdCarrinho = async (parent) => {

    const carrinho = JSON.parse(sessionStorage.getItem('carrinho'))

    const plano = parent.parentNode.querySelector('.plano').textContent

    const quantidade = await diminuirQntd(parent, carrinho.planos[plano].quantidade)

    if (quantidade >= 1) {
        await adicionarCarrinho(parent, plano, true)
        await calcularTotalItem(parent, plano)
    }

    return quantidade
}