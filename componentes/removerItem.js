import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { itensCarrinho } from "./carregarDados.js"

export const removerItemCarrinho = async (parent) => {
    const plano = parent.querySelector('.plano').textContent

    let campoQntd = parent.querySelector('.qntd')

    campoQntd.textContent = 0

    await adicionarCarrinho(parent, plano, true)
    await itensCarrinho(true)
}