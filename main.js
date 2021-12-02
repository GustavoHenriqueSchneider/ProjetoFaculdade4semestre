import { quantidadeCarrinho } from "./componentes/carregarDados.js"
import { mainListeners } from "./componentes/listeners.js"

document.addEventListener('DOMContentLoaded', async () => {

    await quantidadeCarrinho()
    await mainListeners()
})