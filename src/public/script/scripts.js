const FORM = document.querySelector('form')
const NAME = document.getElementById('name')
const SURNAME = document.getElementById('surname')
const EMAIL = document.getElementById('email')
const CANTIDAD = document.getElementById('cantidad')
const TOTAL = document.getElementById('total')
const SELECTOR = document.getElementById('selector')
const BUTTON = document.getElementById('delete')

FORM.addEventListener('submit', e =>{
    e.preventDefault()
    const percentage = parseFloat(SELECTOR.value)
    const cant = parseInt(CANTIDAD.value)
    const price = 200 * cant * percentage
    TOTAL.innerText = price.toString()
})

BUTTON.addEventListener('click', e =>{
    e.preventDefault()
    NAME.value = ''
    SURNAME.value = ''
    EMAIL.value = ''
    CANTIDAD.value = ''
    SELECTOR.selectedIndex = 0
    TOTAL.innerText = ''


})

