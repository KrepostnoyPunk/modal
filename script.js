const bodyEl = document.body
const modalTriggerEl = document.querySelector('.modal__trigger')

const modalEl = document.createElement('div')
const modalBgEl = document.createElement('span')
const crossBtnEl = document.createElement('button')

function showModal(){
    modalTriggerEl.style.display = 'none'

    modalBgEl.classList.add('modal__bg')
    bodyEl.prepend(modalBgEl)

    modalEl.innerHTML = `<h1>MODAL</h1>`
    modalEl.classList.add('modal')
    modalBgEl.prepend(modalEl)

    crossBtnEl.innerHTML = `<i class="fa-solid fa-xmark fa-2x"></i>`
    crossBtnEl.classList.add('cross-btn')
    modalEl.append(crossBtnEl)
}

function closeModal(){
        modalEl.remove()
        modalBgEl.remove()
        crossBtnEl.remove()
        modalTriggerEl.style.display = 'block'
}

modalTriggerEl.addEventListener('click', e => {
    showModal()
})

crossBtnEl.addEventListener('click', e => {
    closeModal()
})