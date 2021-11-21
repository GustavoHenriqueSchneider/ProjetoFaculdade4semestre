
export const aumentarQntd = (parent) => {
    let campoQntd = parent.querySelector('.qntd')
    let quantidade = parseInt(campoQntd.value, 10)

    if(quantidade<100)
        quantidade++

    campoQntd.value = quantidade    
}

export const diminuirQntd = (parent) => {
    let campoQntd = parent.querySelector('.qntd')
    let quantidade = parseInt(campoQntd.value, 10)

    if(quantidade>1)
        quantidade--

    campoQntd.value = quantidade    
}