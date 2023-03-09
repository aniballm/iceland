//import MagnetMouse from './magnet-mouse'

/* Animación del botón del menú */
const menuHamburger = document.querySelector('#navicon')
const menuScreen = document.querySelector('.menu')

menuHamburger.addEventListener('click', () => {
    if (menuHamburger.classList.contains('open')) {
        menuScreen.classList.remove('open')
        menuScreen.classList.add('close')

        setTimeout(() => {
            menuScreen.classList.remove('close')
            menuHamburger.classList.remove('open')
        }, 1000)
    } else {
        menuHamburger.classList.add('open')
        if (!menuScreen.classList.contains('open')) {
            menuScreen.classList.add('open')
        }
    }
})

/* Animaciones de los elementos principales */
const logoAnimation = new MagnetMouse({
    magnet: {
        element: '.header-logo',
        enabled: true,
        distance: 7,
        position: 'center'
    }
})
logoAnimation.init()

const menuAnimation = new MagnetMouse({
    magnet: {
        element: '.header-menu',
        enabled: true,
        distance: 7,
        position: 'center'
    }
})
menuAnimation.init()

const titleAnimation = new MagnetMouse({
    magnet: {
        element: '.title-text',
        enabled: true,
        distance: 10,
        position: 'center'
    }
})
titleAnimation.init()