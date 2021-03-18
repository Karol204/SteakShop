const labels = document.querySelectorAll('.form-control label')


labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

const body = document.querySelector('.sixth-section')
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0



setBgToBody()

setInterval(() => {
    activeSlide++
    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    } else if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
}, 7000)

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}