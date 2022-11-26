const form = document.querySelector("form")
const ratingFld = form.querySelector(".rating-choice")
const ratingBtns = form.querySelectorAll(".rating-radio-btn")
const inputNodes = form.querySelectorAll("input")

ratingBtns[4].classList.add("selected")

ratingFld.addEventListener('click', event => {
    inputNodes.forEach(function callback (input, index) {
        if (input.checked) {
            ratingBtns[index].classList.add("selected")
        } else {
            ratingBtns[index].classList.remove("selected")
        }
    })
})

form.addEventListener('submit', event => {
    processRating()
    event.preventDefault()
    return false
})

function processRating() {
    const choice = form.querySelector('input:checked').value
    const ratingPrompt = document.querySelector('.rating-prompt')
    const ratingResponse = document.querySelector('.thank-you-response')
    const choiceShown = document.querySelector('#selection')

    ratingPrompt.classList.add('hidden')
    ratingResponse.classList.remove('hidden')
    choiceShown.textContent = choice
}