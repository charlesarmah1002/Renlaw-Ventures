let menuButton = document.querySelector('.primary-navigation button')
let menuDrop = document.querySelector('.primary-navigation .menu')

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active')
    menuDrop.classList.toggle('active')
})

function menuShut() {
    if (menuButton.className = 'active') {
        menuButton.classList.remove('active')
        menuDrop.classList.remove('active')
    }
}