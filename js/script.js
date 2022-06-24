// PRELOADER
window.addEventListener('load', () => { return document.getElementById("preloader").style.display = "none"})

// scroll Up
function scrollUP() {
    let scrollBtn = document.getElementById("scrollup");
    if (this.scrollY >= 400)scrollBtn.classList.add("show-scroll"); else scrollBtn.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUP)

/*=============== SCROLL REVEAL ANIMATION ===============*/

window.addEventListener('load', revealOnScroll)

function revealOnScroll() {
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

// for about image
sr.reveal(`.about-image-container`, {origin: 'left'})
sr.reveal(`.about-image-container`, {delay: 900})
sr.reveal(`.about-image-container`, {duration: 3000})

sr.reveal(`.about-text`, {origin: 'right'})
sr.reveal(`.about-text`, {delay: 900})
sr.reveal(`.about-text`, {duration: 3000})

// for home page
sr.reveal(`#sp-container-m1`, {origin: 'left'})
sr.reveal(`#sp-container-m2`, {origin: 'top'})
sr.reveal(`#sp-container-m3`, {origin: 'right'})

sr.reveal(`.home-card-1, .home-card-2, .home-card-3`, {duration: 3000})
sr.reveal(`#sp-container-m1, #sp-container-m2, #sp-container-m3`, {duration: 3000})

// sr.reveal(`#sp-container-m1, #sp-container-m2, #sp-container-m3`, {reset: 'true'})
// sr.reveal(`.home-card-1, .home-card-2, .home-card-3`, {reset: 'true'})

sr.reveal(`.menu-item-left .menu-item-container`, {origin: 'left'})
sr.reveal(`.menu-item-right .menu-item-container`, {origin: 'right'})

// sr.reveal(`.menu-item-left .menu-item-container`, {reset: 'true'})
// sr.reveal(`.menu-item-right .menu-item-container`, {reset: 'true'})
}