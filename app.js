//setup date
document.getElementById("date").innerHTML = new Date().getFullYear();

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// handle form
const form = document.querySelector('.contact-form form');
const formControls=document.querySelectorAll('.form-control');
const btn=document.querySelector('.submit-btn');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('asdlfjd');
  formControls.forEach(control=>{
    control.value="";
  })
  btn.innerText="Sent"
  btn.disabled=true;
  btn.classList.add('disabled');
  
})