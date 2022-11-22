const footer = document.querySelector("footer")
const shareBtn = document.querySelector("#share-btn")
const byline = document.querySelector(".article-byline")
const previewWrapper = document.querySelector(".preview-wrapper")
const desktopWidth = window.matchMedia('(min-width: 1080px)')

// creating the share prompt
const sharePrompt = document.createElement('div')
sharePrompt.className = 'share-options'
sharePrompt.innerHTML = '<h3>Share</h3><a href="#"><img src="./assets/img/icon-facebook.svg" alt="Share to Facebook" /></a>           <a href="#"><img src="./assets/img/icon-twitter.svg" alt="Share to Twitter" /></a>            <a href="#"><img src="./assets/img/icon-pinterest.svg" alt="Share to Pinterest" /></a>'
let shareStatus = false

shareBtn.addEventListener('click', event => {
    if (!desktopWidth.matches) {
        footer.classList.toggle("share-skin")
        byline.classList.toggle("hidden")
    }
    shareBtn.classList.toggle("share-arrow-onclick")
    shareStatus = !shareStatus
    sharePromptToggle(shareStatus)
})

function addShareOption(){
    if (!desktopWidth.matches) {
        footer.appendChild(sharePrompt)
    } else {
        previewWrapper.appendChild(sharePrompt)
    }
}

function removeShareOption(){
    let shareOption = document.querySelector(".share-options")
    shareOption.remove()
}

function sharePromptToggle(state) {
    if (state){
        addShareOption()
    } else {
        removeShareOption()
    }
}