import { diminuirQntd } from "./alterarQntd.js"
import { aumentarQntd } from "./alterarQntd.js"
import { diminuirQntdCarrinho } from "./alterarQntd.js"
import { aumentarQntdCarrinho } from "./alterarQntd.js"
import { adicionarCarrinho } from "./adicionarCarrinho.js"
import { calcularTotal } from "./carregarDados.js"
import { removerItemCarrinho } from "./removerItem.js"
import { loadingPanel } from "./loading.js"

export const mainListeners = async () => {

    const btnDiminuirQntd = document.querySelectorAll('.diminuirQntd')
    const btnAumentarQntd = document.querySelectorAll('.aumentarQntd')
    const btnAdicionarCarrinho = document.querySelectorAll('.adicionarCarrinho')

    for (let btn of btnDiminuirQntd) {
        btn.addEventListener('click', async () => {
            await diminuirQntd(btn.parentNode)
        })
    }

    for (let btn of btnAumentarQntd) {
        btn.addEventListener('click', async () => {
            await aumentarQntd(btn.parentNode)
        })
    }

    for (let btn of btnAdicionarCarrinho) {
        btn.addEventListener('click', async () => {
            await adicionarCarrinho(btn.parentNode.parentNode)
        })
    }
}

export const buyListeners = async () => {

    const btnDiminuirQntd = document.querySelectorAll('.diminuirQntd')
    const btnAumentarQntd = document.querySelectorAll('.aumentarQntd')
    const btnRemoverItemCarrinho = document.querySelectorAll('.removerItem')

    for (let btn of btnDiminuirQntd) {
        btn.addEventListener('click', async () => {
            const quantidade = await diminuirQntdCarrinho(btn.parentNode)

            if(quantidade >= 1)
                await loadingPanel(calcularTotal)
        })
    }

    for (let btn of btnAumentarQntd) {
        btn.addEventListener('click', async () => {
            const quantidade = await aumentarQntdCarrinho(btn.parentNode)

            if(quantidade <= 100)
                await loadingPanel(calcularTotal)
        })
    }

    for (let btn of btnRemoverItemCarrinho) {
        btn.addEventListener('click', async () => {
            await removerItemCarrinho(btn.parentNode.parentNode)
            await loadingPanel(calcularTotal)
        })
    }
}