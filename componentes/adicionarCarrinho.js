import { quantidadeCarrinho } from "./carregarDados.js"
import { loadingPanel } from "./loading.js"

export const adicionarCarrinho = async (parent, plano, carrinhoDireto) => {

    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || await carrinhoVazio()

    if (!plano)
        plano = parent.querySelector('.plano').textContent

    if (!carrinhoDireto)
        carrinhoDireto = false

    const qntd = parseInt(parent.querySelector('.qntd').textContent, 10)

    const quantidadeAtual = parseInt(carrinho.planos[plano].quantidade, 10)

    if (carrinhoDireto)
        carrinho.planos[plano].quantidade = qntd
    else
        carrinho.planos[plano].quantidade = (quantidadeAtual + qntd)

    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))

    if (!carrinhoDireto)
        await loadingPanel(quantidadeCarrinho)
    else
        await quantidadeCarrinho()
}

export const carrinhoVazio = async () => {
    let carrinho = {
        planos: {
            Baixa: {
                quantidade: 0,
                preco: 99.99
            },
            Média: {
                quantidade: 0,
                preco: 159.99
            },
            Alta: {
                quantidade: 0,
                preco: 299.99
            }
        }
    }

    return carrinho
}