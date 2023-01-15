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
const indoor = document.getElementById('indoor');
//For Portrait
portrait.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/PORTRAIT/IMG_9001.jpg')"
}
portrait.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
}
//Wedding
wedding.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/WEDDING/IMG_3700.jpg')"
}
wedding.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
}
//Indoor
indoor.onmouseover = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/INDOOR/IMG_80661.jpg')"
    document.body.style.backgroundPosition = "top";
}
indoor.onmouseout = () =>{
    document.body.style.backgroundImage = "url('../Rawfile/images/background.png')"
    document.body.style.backgroundPosition = "center";
}
