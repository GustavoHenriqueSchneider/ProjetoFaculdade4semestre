
export const loadingPanel = async (funcao, param1, param2) => {

    await bloquearClicks()

    const delay = 1000

    let loading = document.createElement('div')
    loading.classList.add('loading')

    let loadingSpin = document.createElement('div')
    loadingSpin.classList.add('spin')

    loading.appendChild(loadingSpin)

    let body = document.querySelector('body')
    body.appendChild(loading)

    let header = document.querySelector('header')
    let main = document.querySelector('main')
    let footer = document.querySelector('footer')

    header.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'

    setTimeout(async () => {

        if (param1 && param2)
            await funcao(param1, param2)
        else if (param1)
            await funcao(param1)
        else
            await funcao()

        const body = document.querySelector('body')
        const loading = document.querySelector('.loading')

        body.removeChild(loading)

        await desbloquearClicks()

        header.removeAttribute('style')
        main.removeAttribute('style')
        footer.removeAttribute('style')

    }, delay);
}

const bloquearClicks = async () => {

    let body = document.querySelector('body')

    body.style.pointerEvents = "none"
    
}
const desbloquearClicks = async () => {

    let body = document.querySelector('body')

    body.style.pointerEvents = "auto"
}
