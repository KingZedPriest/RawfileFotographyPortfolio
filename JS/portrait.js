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
        entry.target.classList.add("seen");
      } 
    });
  });
  const hiddenElements = document.querySelectorAll(".unseen");
  hiddenElements.forEach((el) => observer.observe(el));

  //Links Hover For Portrait Page
const pPortrait = document.getElementById('pPortrait');
const pWedding = document.getElementById('pWedding');
const pOutdoor = document.getElementById('pOutdoor');
const pInfants = document.getElementById('pInfants');
const pFixed = document.getElementById('pFixed');
//Wedding
pWedding.onmouseover = () =>{
  pFixed.style.backgroundImage = "url('../Rawfile/images/rawfile1.jpeg')"
  pPortrait.style.border = "none";
}
pWedding.onmouseout = () =>{
  pFixed.style.backgroundImage = "url('../Rawfile/images/rawfile.jpeg')"
  pPortrait.style.borderBottom = "2px solid white";
  pPortrait.style.borderRadius = "0.5rem";
}
//Outdoor
pOutdoor.onmouseover = () =>{
  pFixed.style.backgroundImage = "url('../Rawfile/images/rawfile2.jpeg')"
  pPortrait.style.border = "none";
}
pOutdoor.onmouseout = () =>{
  pFixed.style.backgroundImage = "url('../Rawfile/images/rawfile.jpeg')"
  pPortrait.style.borderBottom = "2px solid white";
  pPortrait.style.borderRadius = "0.5rem";
}
//Infants
pInfants.onmouseover = () =>{
  pFixed.style.backgroundImage = "url('../Rawfile/images/rawfile3.jpeg')"
  pPortrait.style.border = "none";
}
pInfants.onmouseout = () =>{
  pFixed.style.backgroundImage = "url('../Rawfile/images/rawfile.jpeg')"
  pPortrait.style.borderBottom = "2px solid white";
  pPortrait.style.borderRadius = "0.5rem";
}