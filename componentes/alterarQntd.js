import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { calcularTotalItem } from "./carregarDados.js"

export const aumentarQntd = async (parent) => {
    let campoQntd = parent.querySelector('.qntd')
    let quantidade = parseInt(campoQntd.textContent, 10)

    if (quantidade < 100)
        quantidade++

    campoQntd.textContent = quantidade
}

export const diminuirQntd = async (parent) => {
    let campoQntd = parent.querySelector('.qntd')
    let quantidade = parseInt(campoQntd.textContent, 10)

    if (quantidade > 1){
        quantidade--
        campoQntd.textContent = quantidade
        return quantidade
    }

    return --quantidade
}

export const aumentarQntdCarrinho = async (parent) => {

    const plano = parent.parentNode.querySelector('.plano').textContent

    await aumentarQntd(parent)
    await adicionarCarrinho(parent, plano, true)
    await calcularTotalItem(parent, plano)
}

export const diminuirQntdCarrinho = async (parent) => {

    const plano = parent.parentNode.querySelector('.plano').textContent

    const quantidade = await diminuirQntd(parent)
    
    if (quantidade >= 1){
        await adicionarCarrinho(parent, plano, true)
        await calcularTotalItem(parent, plano)
    }   
}