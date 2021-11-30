import { carrinhoVazio } from "./adicionarCarrinho.js"
import { diminuirQntdCarrinho } from "./alterarQntd.js"
import { aumentarQntdCarrinho } from "./alterarQntd.js"
import { removerItemCarrinho } from "./removerItem.js"
import { calcularFrete } from "./frete.js"
import { loadingPanel } from "./loading.js"

export const quantidadeCarrinho = () => {

    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || carrinhoVazio()
    let quantidadeCarrinho = 0
    const planos = carrinho.planos
    const itensCarrinho = document.getElementById('qntdCarrinho')

    for (let plano in planos) {
        if (parseInt(planos[plano].quantidade, 10) > 0)
            quantidadeCarrinho++
    }

    itensCarrinho.textContent = `( ${quantidadeCarrinho} )`

    return quantidadeCarrinho
}

export const itensCarrinho = () => {

    const itensCarrinho = document.querySelectorAll('.item')

    const carrinho = document.getElementById('carrinho')
    const totalCarrinho = document.getElementById('total')
    const mensagemVazio = document.getElementById('mensagemCarrinhoVazio')

    for (let item of itensCarrinho) {
        carrinho.removeChild(item)
    }

    const qtnd = quantidadeCarrinho()

    if (qtnd > 0) {

        mensagemVazio.classList.replace('enabled', 'disabled')
        carrinho.classList.replace('disabled', 'enabled')
        totalCarrinho.classList.replace('disabled', 'enabled')

        const itens = JSON.parse(sessionStorage.getItem('carrinho')).planos

        let numeroItem = 1

        for (let item in itens) {

            if (itens[item].quantidade > 0) {

                let div = document.createElement('div')
                div.classList.add('item')

                let text = document.createElement('h3')
                text.classList.add('tituloItem')
                text.textContent = `${numeroItem} - Pacote `

                let plano = document.createElement('strong')
                plano.classList.add('plano')
                plano.textContent = item

                text.appendChild(plano)

                let table = document.createElement('table')
                table.classList.add('valores')

                let thead = document.createElement('thead')
                let tbody = document.createElement('tbody')

                let tr = document.createElement('tr')

                const msgs = ['Valor Unitário do Item', 'Valor Total do Item']

                for (let msg of msgs) {
                    let th = document.createElement('th')
                    th.textContent = msg
                    tr.appendChild(th)
                }

                thead.appendChild(tr)

                const precoTotalItem = (itens[item].preco * itens[item].quantidade)
                const precos = [(itens[item].preco), precoTotalItem]

                tr = document.createElement('tr')

                for (let i = 0; i < precos.length; i++) {
                    let th = document.createElement('th')
                    th.textContent = `R$ ${precos[i].toFixed(2).replace('.',',')}`

                    if (i === 1 && precos[i] === precoTotalItem)
                        th.classList.add('precoTotalItem')

                    tr.appendChild(th)
                }

                tbody.appendChild(tr)

                table.appendChild(thead)
                table.appendChild(tbody)

                div.appendChild(text)
                div.appendChild(table)

                let controls = document.createElement('div')
                controls.classList.add('controls')

                let btns = [
                    {
                        tag: 'button',
                        class: 'diminuirQntd',
                        inside: {
                            tag: 'i',
                            class: 'bi bi-dash'
                        }
                    },
                    {
                        tag: 'span',
                        class: 'qntd'
                    },
                    {
                        tag: 'button',
                        class: 'aumentarQntd',
                        inside: {
                            tag: 'i',
                            class: 'bi bi-plus'
                        }
                    },
                    {
                        tag: 'button',
                        class: 'removerItem',
                        inside: {
                            tag: 'i',
                            class: 'bi bi-x-circle'
                        }
                    }
                ]

                for (let btn of btns) {

                    let field = document.createElement(btn.tag)
                    field.classList.add(btn.class)

                    if (btn.inside !== undefined) {
                        let insideField = document.createElement(btn.inside.tag)
                        insideField.className = btn.inside.class

                        field.appendChild(insideField)
                    }

                    if (btn.tag === 'span')
                        field.textContent = itens[item].quantidade

                    controls.appendChild(field)
                }

                div.appendChild(controls)

                carrinho.appendChild(div)

                numeroItem++
            }
        }

        const btnDiminuirQntd = document.querySelectorAll('.diminuirQntd')
        const btnAumentarQntd = document.querySelectorAll('.aumentarQntd')
        const btnRemoverItemCarrinho = document.querySelectorAll('.removerItem')

        for (let btn of btnDiminuirQntd) {
            btn.addEventListener('click', () => {
                diminuirQntdCarrinho(btn.parentNode)
            })
        }

        for (let btn of btnAumentarQntd) {
            btn.addEventListener('click', () => {
                aumentarQntdCarrinho(btn.parentNode)
            })
        }

        for (let btn of btnRemoverItemCarrinho) {
            btn.addEventListener('click', () => {
                removerItemCarrinho(btn.parentNode.parentNode)
            })
        }

        return calcularTotal()
    }

    carrinho.classList.replace('enabled', 'disabled')
    totalCarrinho.classList.replace('enabled', 'disabled')
    mensagemVazio.classList.replace('disabled', 'enabled')
}

export const calcularTotalItem = (parent, plano) => {

    let carrinho = JSON.parse(sessionStorage.getItem('carrinho'))

    const preco = carrinho.planos[plano].preco
    const quantidade = carrinho.planos[plano].quantidade

    const precoTotal = parent.parentNode.querySelector('.precoTotalItem')
    const total = preco * quantidade

    precoTotal.textContent = `R$ ${total.toFixed(2).replace('.',',')}`
}

const calcularTotal = () => {
    const valorTotalItens = document.querySelectorAll('.precoTotalItem')
    const valorTotalSpan = document.querySelector('#precoTotal > strong')

    let valorTotal = 0

    for(let valorTotalItem of valorTotalItens)
        valorTotal += parseInt(valorTotalItem, 10)
     
    valorTotalSpan.textContent = valorTotal

    const radiosFrete = document.querySelectorAll('input[id^="frete"]')

    for(let radio of radiosFrete)
        radio.addEventListener('click', () => {
            loadingPanel(calcularFrete, radio.value)
        })

    return true
}