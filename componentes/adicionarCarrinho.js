import { dadosCarrinho } from "./carregarDados.js"

export const adicionarCarrinho = (parent) => {

    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || carrinhoVazio()
    const plano = parent.querySelector('.plano').textContent
    const qntd = parseInt(parent.querySelector('.qntd').value, 10)

    const quantidadeAtual = parseInt(carrinho.planos[plano].quantidade, 10)

    carrinho.planos[plano].quantidade = (quantidadeAtual + qntd)

    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))

    dadosCarrinho()
}

export const carrinhoVazio = () => {
    let carrinho = {
        planos: {
            Mensal: {
                quantidade: 0,
                preco: 29.99
            },
            Semestral: {
                quantidade: 0,
                preco: 161.94
            },
            Anual: {
                quantidade: 0,
                preco: 291.49
            }
        }
    }

    return carrinho
}