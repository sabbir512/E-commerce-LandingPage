/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    let header = document.getElementById("header")
    // when the sroll is greater than 50 viewport height, add the "scroll-header" classs
    this.scrollY >=50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/
 
let swiperProducts = new Swiper(".products-container", {


    spaceBetween: 32,
    grabCursor: true,
    centeredslieds: true,
    slidesPerView: 'auto',
    loop: true,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        
        1024: {
          spaceBetween: 72,
        },
      },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
           sectionTop = current.offsetTop - 58,
           sectionId = current.getAttribute("id"),
           sectionsClass = document.querySelector('.nav-menu a[href*= ' + sectionId + ']')

           if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
           }
           else{
            sectionsClass.classList.remove('active-link')
           }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollup =()=>{
  const scrollup = document.getElementById('scroll-up');
  ///when sceen is higher then 350 viewport add this class for show icon

  this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                      : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon ')

// we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if (selectedTheme){
  //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Active/ deactivate theme manually with the button
themeButton.addEventListener('click', ()=>{
  //Add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

//we will save the theme and the current icon that user choose
localStorage.setItem(selected-theme, getCurrentTheme())
localStorage.setItem(selected-icon, getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.home-data, .products-container, .footer-container, .footer-info`)
sr.reveal(`.home-images, .brand-img .products-card`, {delay: 600, origin: 'bottom'})
sr.reveal(`.collection-explore:nth-child(1)`, {origin: 'right'})
sr.reveal(`.collection-explore:nth-child(2)`, {origin: 'left'})