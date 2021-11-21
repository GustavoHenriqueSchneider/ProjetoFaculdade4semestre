import { carrinhoVazio } from "./adicionarCarrinho.js"

export const dadosCarrinho = () => {

    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || carrinhoVazio()
    let quantidadeCarrinho = 0
    const planos = carrinho.planos
    const itensCarrinho = document.getElementById('qntdCarrinho')

    for (let plano in planos) {
        if(parseInt(planos[plano].quantidade, 10) > 0)
            quantidadeCarrinho++
    }

    itensCarrinho.textContent = `( ${quantidadeCarrinho} )`
}