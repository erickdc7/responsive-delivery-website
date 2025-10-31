/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })
}

showMenu('nav-menu', 'nav-toggle')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

/*=============== ADD SHADOW HEADER ===============*/


/*=============== SWIPER REVIEWS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
