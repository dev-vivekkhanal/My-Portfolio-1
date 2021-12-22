const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li")




const navSlide = () => {
   

    
     
    
    menu.addEventListener('click' , () => {

        // Toggle Nav
        nav.classList.toggle('nav-active')

        // Animate links
        navLinks.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 + 0.2}s` 
        })

        // menu animation
        menu.classList.toggle('toggle')
    })

    

    
}



const eachNavLinks = document.querySelectorAll(".nav-links li a")
     console.log(eachNavLinks) 

     function autoClose(){
        nav.classList.remove('nav-active')
        menu.classList.remove('toggle')

     }
 
autoClose()
navSlide()



// // // Animate links
// navLinks.forEach((link, index) => {
//     if(link.style.animation){
//         link.style.animation = ""
//     }else{
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 + 0.2}s` 
//     }
// })