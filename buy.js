import { itensCarrinho } from "./componentes/carregarDados.js"
import { buyListeners } from "./componentes/listeners.js"
import { calcularFrete } from "./componentes/frete.js"
import { loadingPanel } from "./componentes/loading.js"
import { calcularTotal } from "./componentes/carregarDados.js"

document.addEventListener('DOMContentLoaded', async () => {
    const itemsLoaded = await itensCarrinho()
    const radiosFrete = document.querySelectorAll('input[id^="frete"]')

    if (itemsLoaded) {

        await buyListeners()

        for (let radio of radiosFrete) {
            radio.addEventListener('click', async () => {
                await calcularFrete()
                await loadingPanel(calcularTotal)
            })
        }
    }
})
