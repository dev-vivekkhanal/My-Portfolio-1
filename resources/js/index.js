const navSlide = () => {
    const menu = document.querySelector(".menu")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")

    
    menu.addEventListener('click' , () => {

        // Toggle Nav
        nav.classList.toggle('nav-active')

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` 
            }
        })

        // menu animation
        menu.classList.toggle('toggle')
    })

    
}

navSlide()



// 