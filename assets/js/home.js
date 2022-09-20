const sections = document.querySelectorAll(".section[id]")
const navItems = document.querySelectorAll(".navbar__item")
let activeNavItem = document.querySelector(".navbar__item.active")

//-------------------------------- Handle active link ------------------------------
navItems.forEach(navItem => {
    navItem.addEventListener('click', evt => {
        if (navItem !== activeNavItem) {
            navItem.classList.add("active")
            activeNavItem.classList.remove("active")
            activeNavItem = navItem
        }
    })
})

// ----------------------- Handle scroll sections active link -----------------------
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 10
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            let currentNavItem = document.querySelector("a[href='#"+ sectionId +"']").parentNode
            if (currentNavItem !== activeNavItem) {
                currentNavItem.classList.add('active')
                activeNavItem.classList.remove('active')
                activeNavItem = currentNavItem
            }
        }

    })
}

window.addEventListener('scroll', scrollActive)
