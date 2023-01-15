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
const pPortrait = document.getElementById("pPortrait");
const pWedding = document.getElementById("pWedding");
const pIndoor = document.getElementById("pIndoor");
const pFixed = document.getElementById("pFixed");
const custom = document.querySelectorAll(".custom");
//Wedding
pWedding.onmouseover = () => {
  pFixed.style.backgroundImage =
    "url('../Rawfile/images/WEDDING/IMG_3700.jpg')";
  pPortrait.style.border = "none";
};
pWedding.onmouseout = () => {
  pFixed.style.backgroundImage =
    "url('../Rawfile/images/PORTRAIT/IMG_9001.jpg')";
  pPortrait.style.borderBottom = "2px solid white";
  pPortrait.style.borderRadius = "0.5rem";
};
//Indoor
pIndoor.onmouseover = () => {
  pFixed.style.backgroundImage =
    "url('../Rawfile/images/INDOOR/IMG_80661.jpg')";
  pPortrait.style.border = "none";
};
pIndoor.onmouseout = () => {
  pFixed.style.backgroundImage =
    "url('../Rawfile/images/PORTRAIT/IMG_9001.jpg')";
  pPortrait.style.borderBottom = "2px solid white";
  pPortrait.style.borderRadius = "0.5rem";
};
//Images Hover
custom.forEach((el) => {
  el.onmouseover = () => {
    el.classList.add("hover:scale-150");
    el.classList.add("z-10");
  };
  el.onmouseout = () => {
    el.classList.remove("hover:scale-150");
    el.classList.remove("z-10");
  };
});
