
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

function openCloseSitebar() {
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

 
headerIcon.addEventListener('click', () => openCloseSitebar())
smResHeaderIcon.addEventListener('click', () => smResOpenCloseSitebar())
sitebarBackdrop.addEventListener('click', (e) => {
    e.stopPropagation()
    smResSitebar.classList.remove('sm-res-sitebar-width')
    sitebarBackdrop.classList.remove('sitebar-backdrop-visible')
})


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

