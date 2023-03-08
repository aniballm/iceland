/* Animación del botón del menú */
const menuHamburger = document.querySelector('#navicon')

menuHamburger.addEventListener('click', () => {
    if (menuHamburger.classList.contains('open')) {
        menuHamburger.classList.remove('open')
    } else {
        menuHamburger.classList.add('open')
    }
})


/* Movimiento del logo */
const logoContainer = document.querySelector('.header-logo')

logoContainer.addEventListener('mousemove',(e) => {
    console.log(e.target)
    console.log('X: ' + e.movementX + ' Y: ' + e.movementY)
})