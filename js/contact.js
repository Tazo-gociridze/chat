
const body = document.querySelector('.body')
const header = document.querySelector('.header')
const sitebar = document.querySelector('.sitebar')
const sitebarBackdrop = document.querySelector('.sitebar-backdrop')

const headerIcon = document.querySelector('.header-icon')


// sitebar 80px width response

const sitebarNavLink = document.querySelectorAll('.sitebar__nav-link')

function sitebarResponse() {
      for (const navItem of sitebarNavLink) {
          navItem.querySelector('h3').classList.toggle('display-none')
          navItem.querySelector('.circle').classList.toggle('display-none')
          navItem.querySelector('.nav-link').classList.toggle('margin-auto')
      }
}

// sitebar toggle

function openCloseSitebar(e) {
        e.stopPropagation()

        body.classList.toggle('padding_left')
        header.classList.toggle('padding_left')

        sitebar.classList.toggle('sitebar-toggle-width')
        sitebar.classList.toggle('sitebar-width')
        sitebar.classList.remove('sitebar-sm-resolution-width')
        
        headerIcon.classList.toggle('menu-png')
        headerIcon.classList.toggle('close-png')

        sitebarResponse()
}

// sm-res sitebar toggle

const smResHeaderIcon = document.querySelector('.sm-res-header-icon')
const smResSitebar = document.querySelector('.sm-res-sitebar')

function smResOpenCloseSitebar() {
       smResSitebar.classList.toggle('sm-res-sitebar-width')
       sitebarBackdrop.classList.add('sitebar-backdrop-visible')
}

 
headerIcon.addEventListener('click', (e) => openCloseSitebar(e))
smResHeaderIcon.addEventListener('click', () => smResOpenCloseSitebar())
sitebarBackdrop.addEventListener('click', (e) => {
    e.stopPropagation()
    smResSitebar.classList.remove('sm-res-sitebar-width')
    sitebarBackdrop.classList.remove('sitebar-backdrop-visible')
})

//breakpoint

function myFunction(x) {
    if (x.matches) { 
        smResSitebar.classList.remove('sm-res-sitebar-width')
        sitebarBackdrop.classList.remove('sitebar-backdrop-visible')
    } 
  }
  
  var x = window.matchMedia("(max-width: 895px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });


// tools active

const headerTools = document.querySelectorAll('.tool-item')
const headerToolBar = document.querySelectorAll('.header-tool-bar')

for(let i=0; i < headerTools.length; i++){
    headerTools[i].addEventListener('click', (e) =>{
        e.stopPropagation()
       const tool = headerTools[i].querySelector('.header-tool-bar')

       for(let j=0; j < headerToolBar.length; j++){
          headerToolBar[j].classList.remove('d-block')
       }

       tool.classList.toggle('d-block')
       console.log('asdw')
    })   
}

document.body.addEventListener('click', () =>{
    for(let j=0; j < headerToolBar.length; j++){
        headerToolBar[j].classList.remove('d-block')
    }
})

// dark-mode

const moon = document.querySelector('.moon-icon')
const sun = document.querySelector('.sun-icon')

moon.addEventListener('click', () =>{
    moon.classList.add('d-none')
    sun.classList.remove('d-none')
})

sun.addEventListener('click', () =>{
    sun.classList.add('d-none')
    moon.classList.remove('d-none')
})


const darkModeBtn = document.querySelector('.dark-mode-icon')
const rootElement = document.querySelector('.parent')

function darkmode(e){
    e.stopPropagation()
    const wasDarkMode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkMode)
    rootElement.classList.toggle('dark-mode', !wasDarkMode)
}

darkModeBtn.addEventListener('click', (e) => darkmode(e))

function onLoad() {
    rootElement.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
}

document.addEventListener('DOMContentLoaded', onLoad)

// select languages

const languages = document.querySelectorAll('.lang')
const headerLangPng = document.querySelector('.header-lang-png')

for (const lang of languages) {
    lang.addEventListener('click', (e) => {
        e.stopPropagation()
        const image = lang.querySelector('img')
        headerLangPng.src = image.src

        for(let h = 0; h < headerToolBar.length; h++) {
            headerToolBar[h].classList.remove('d-block')
        }
    })
}

//scrollY

const scrollBtn = document.querySelector('.top-scroll-btn')

scrollBtn.addEventListener('click', () => {
    window.scrollBy(0, -1000000)
})

window.addEventListener('scroll', () =>{
    if(window.pageYOffset === 0){
    } else{
        scrollBtn.classList.remove('d-none')
    }
   
})