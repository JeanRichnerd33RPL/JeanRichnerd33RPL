// toggle
const navbarNav = document.querySelector(".navbar-nav");
// when click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// click diluar
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener('click',function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})
const Context=document.querySelector('.context')
const displayContact=document.querySelector('#Contact')
const MediaQuery= window.matchMedia('(max-width:750px)');

function handlingMediaQuery(event) {
  if(event.matches){
    displayContact.onclick=()=>{
      open('Contact.html','_blank')
    }
    
  }else{
    displayContact.onclick=()=>{
      Context.classList.toggle('active')
    }
  }
}
MediaQuery.addEventListener('change',handlingMediaQuery)
handlingMediaQuery(MediaQuery)
