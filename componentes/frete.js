
export const calcularFrete = async () => {
    let span = document.querySelector('#precoFrete > strong')
    let freteValue = document.querySelector('input[name="frete"]:checked').value

    span.textContent = freteValue

    return parseFloat(freteValue.replace('R$ ','').replace(',','.'))
}