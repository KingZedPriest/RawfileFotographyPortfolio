//For Nav Bar
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
//For Image Enlargement On Hover
const custom = document.querySelectorAll(".custom");
//For The Links and Background Change on Hover
const wPortrait = document.getElementById("wPortrait");
const wWedding = document.getElementById("wWedding");
const wIndoor = document.getElementById("wIndoor");
const wFixed = document.getElementById("wFixed");
//For The Animation and Observer
const hiddenElements = document.querySelectorAll(".unseen");

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

//Links Hover For Wedding Page
//Portrait
wPortrait.onmouseover = () => {
  wFixed.style.backgroundImage =
    "url('../Rawfile/images/PORTRAIT/IMG_9001.jpg')";
  wWedding.style.border = "none";
};
wPortrait.onmouseout = () => {
  wFixed.style.backgroundImage =
    "url('../Rawfile/images/WEDDING/IMG_3700.jpg')";
  wWedding.style.borderBottom = "2px solid white";
  wWedding.style.borderRadius = "0.5rem";
};
//Indoor
wIndoor.onmouseover = () => {
  wFixed.style.backgroundImage =
    "url('../Rawfile/images/INDOOR/IMG_80661.jpg')";
  wWedding.style.border = "none";
};
wIndoor.onmouseout = () => {
  wFixed.style.backgroundImage =
    "url('../Rawfile/images/WEDDING/IMG_3700.jpg')";
  wWedding.style.borderBottom = "2px solid white";
  wWedding.style.borderRadius = "0.5rem";
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
