
export const loadingPanel = (funcao, param1, param2) => {

    const delay = 1000

    let loading = document.createElement('div')
    loading.classList.add('loading')

    let loadingSpin = document.createElement('div')
    loadingSpin.classList.add('spin')

    loading.appendChild(loadingSpin)

    let body = document.querySelector('body')
    body.appendChild(loading)

    setTimeout(function () {

        if (param1 && param2)
            funcao(param1, param2)
        else if (param1)
            funcao(param1)
        else
            funcao()

        const body = document.querySelector('body')
        const loading = document.querySelector('.loading')

        body.removeChild(loading)

    }, delay);
}
