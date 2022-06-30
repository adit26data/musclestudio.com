const hamburger = document.getElementById('hamburger')
const navbar = document.getElementById('navbar')

console.log(hamburger)

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('navbar')
    navbar.classList.toggle('responsive')
})