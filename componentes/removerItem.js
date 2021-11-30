import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { itensCarrinho } from "./carregarDados.js"
import { loadingPanel } from "./loading.js"

export const removerItemCarrinho = (parent) => {
    const plano = parent.querySelector('.plano').textContent

    let campoQntd = parent.querySelector('.qntd')

    campoQntd.textContent = 0

    adicionarCarrinho(parent, plano, true)
    loadingPanel(itensCarrinho)
}