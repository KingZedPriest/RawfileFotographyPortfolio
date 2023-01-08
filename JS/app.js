//Nav Bar
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => [
  btn.classList.toggle("open"),
  nav.classList.toggle("flex"),
  nav.classList.toggle("hidden"),
]);
//For The Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("unhide");
    } 
  });
});
const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));

// Links Hover
const portrait = document.getElementById('portrait');
const wedding = document.getElementById('wedding');
const outdoor = document.getElementById('outdoor');
const infants = document.getElementById('infants');
//For Portrait
portrait.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/rawfile.jpeg')"
}
portrait.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
}
//Wedding
wedding.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/rawfile1.jpeg')"
}
wedding.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
}
//Outdoor
outdoor.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/rawfile2.jpeg')"
}
outdoor.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
}
//Infants
infants.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/rawfile3.jpeg')"
}
infants.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
}
