// Section selectors

let sectionForm = document.querySelector("form")
let sectionThanks = document.querySelector("#thank-you")

// Form selectors

let cardName = document.querySelector('#card-name')
let cardNumber = document.querySelector('#card-number')
let cardExpMonth = document.querySelector('#exp-m')
let cardExpYear = document.querySelector('#exp-y')
let cardCvc = document.querySelector('#card-cvc')
let cardSubmit = document.querySelector('#credit-card-submit')

// Error selectors

let errorNumber = document.querySelector('.card-number.invalid')
let errorMonth = document.querySelector('.exp-m.invalid')
let errorYear = document.querySelector('.exp-y.invalid')
let errorCvc = document.querySelector('.card-cvc.invalid')

// Display selectors

let displayName = document.querySelector('.image-card-name')
let displayNumber = document.querySelector('.image-card-number')
let displayMonth = document.querySelector('.image-card-month')
let displayYear = document.querySelector('.image-card-year')
let displayCvc = document.querySelector('.image-card-cvc')

cardName.addEventListener('input', event => {
    displayName.textContent = cardName.value.toUpperCase()
})

cardNumber.addEventListener('input', event => {
    displayNumber.textContent = cardNumber.value
})

cardNumber.addEventListener('invalid', event => {
    if (containsAnyLetters(cardNumber.value)) {
        errorNumber.textContent = 'Wrong format: Numbers only.'
    }
    if (cardNumber.value) {
        errorNumber.textContent = 'Can\'t be blank'
    }
})

cardNumber.addEventListener('keyup', event => {
    if (containsAnyLetters(cardNumber.value)) {
        errorNumber.textContent = 'Wrong format: Numbers only.'
    }

    let ins = [4,9,14]

    if (ins.includes(cardNumber.value.length)) {
        cardNumber.value = cardNumber.value.concat(' ')
    }
})


cardExpMonth.addEventListener('input', event => {
    displayMonth.textContent = cardExpMonth.value
})

cardExpMonth.addEventListener('keyup', event => {
    if (containsAnyLetters(cardExpMonth.value)) {
        errorMonth.textContent = 'Numbers only.'
    }
})

cardExpYear.addEventListener('input', event => {
    displayYear.textContent = cardExpYear.value
})

cardExpYear.addEventListener('keyup', event => {
    if (containsAnyLetters(cardExpYear.value)) {
        errorYear.textContent = 'Numbers only.'
    }
})


cardCvc.addEventListener('input', event => {
    displayCvc.textContent = cardCvc.value
})

cardCvc.addEventListener('keyup', event => {
    if (containsAnyLetters(cardCvc.value)) {
        errorCvc.textContent = 'Numbers only.'
    }
})

sectionForm.addEventListener('submit', event => {
    thankYou()
    return false
})

function thankYou(){
    sectionForm.classList.add("hidden")
    sectionThanks.classList.remove("hidden")
}

function containsAnyLetters(s) {
  return /[a-zA-Z]/.test(s);
}