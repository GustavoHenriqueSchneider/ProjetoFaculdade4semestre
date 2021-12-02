import { itensCarrinho } from "./componentes/carregarDados.js"
import { buyListeners } from "./componentes/listeners.js"

document.addEventListener('DOMContentLoaded', async () => {
    const itemsLoaded = await itensCarrinho()

    if (itemsLoaded)
        await buyListeners()
})
