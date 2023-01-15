//Nav Bar
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
//Links Hover For Wedding Page
const iPortrait = document.getElementById("iPortrait");
const iWedding = document.getElementById("iWedding");
const iIndoor = document.getElementById("iIndoor");
const iFixed = document.getElementById("iFixed");
//For The Animation and Observer
const hiddenElements = document.querySelectorAll(".unseen");
//For Image Enlargement On Hover
const custom = document.querySelectorAll(".custom");

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
hiddenElements.forEach((el) => observer.observe(el));
//Portrait
iPortrait.onmouseover = () => {
  iFixed.style.backgroundImage =
    "url('../Rawfile/images/PORTRAIT/IMG_9001.jpg')";
  iIndoor.style.border = "none";
};
iPortrait.onmouseout = () => {
  iFixed.style.backgroundImage =
    "url('../Rawfile/images/INDOOR/IMG_80661.jpg')";
  iIndoor.style.borderBottom = "2px solid white";
  iIndoor.style.borderRadius = "0.5rem";
};
//Wedding
iWedding.onmouseover = () => {
  iFixed.style.backgroundImage =
    "url('../Rawfile/images/WEDDING/IMG_3700.jpg')";
  iIndoor.style.border = "none";
};
iWedding.onmouseout = () => {
  iFixed.style.backgroundImage =
    "url('../Rawfile/images/INDOOR/IMG_80661.jpg')";
  iIndoor.style.borderBottom = "2px solid white";
  iIndoor.style.borderRadius = "0.5rem";
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
