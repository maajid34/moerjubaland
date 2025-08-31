// Grab all nav triggers
const about        = document.querySelector("#about");
const ministerDrop = document.querySelector("#ministerdrop");
const depart       = document.querySelector("#depart");
const project      = document.querySelector("#project");
const energyDrop   = document.querySelector("#energyDrop");
const waterdrop    = document.querySelector("#waterdrop");

// Grab all dropdown containers
const aboutDrop    = document.querySelector("#aboutDrop");
const minister     = document.querySelector("#minister");
const departDrop   = document.querySelector("#departDrop");
const projectDrop  = document.querySelector("#projectDrop");
const enegrySector = document.querySelector("#enegrySector"); // note spelling
const waterSector  = document.querySelector("#waterSector");

// --- ABOUT ---
about.addEventListener("mouseover", () => {
  aboutDrop.style.display = "block";
  departDrop.style.display = "none";
  enegrySector.style.display = "none";
  projectDrop.style.display = "none";
});
aboutDrop.addEventListener("mouseleave", () => {
  aboutDrop.style.display = "none";
});

// --- MINISTER ---
ministerDrop.addEventListener("mouseover", () => {
  minister.style.display = "block";
  departDrop.style.display = "none";
  enegrySector.style.display = "none";
});
minister.addEventListener("mouseleave", () => {
  minister.style.display = "none";
});

// --- DEPARTMENT ---
depart.addEventListener("mouseover", () => {
  departDrop.style.display = "flex";
  aboutDrop.style.display = "none";
  projectDrop.style.display = "none";
  minister.style.display = "none";
  enegrySector.style.display = "none";
});
departDrop.addEventListener("mouseleave", () => {
  departDrop.style.display = "none";
});

// --- PROJECT ---
project.addEventListener("mouseover", () => {
  projectDrop.style.display = "flex";
  departDrop.style.display = "none";
  enegrySector.style.display = "none";
  aboutDrop.style.display = "none";
});
projectDrop.addEventListener("mouseleave", () => {
  projectDrop.style.display = "none";
});

// --- ENERGY ---
energyDrop.addEventListener("mouseover", () => {
  enegrySector.style.display = "flex";
  departDrop.style.display = "none";
  waterSector.style.display = "none";
});
enegrySector.addEventListener("mouseleave", () => {
  enegrySector.style.display = "none";
});

// --- WATER ---
waterdrop.addEventListener("mouseover", () => {
  waterSector.style.display = "flex";
  enegrySector.style.display = "none";
});
waterSector.addEventListener("mouseleave", () => {
  waterSector.style.display = "none";
  enegrySector.style.display = "none";
});

// --- HEADER STICKY ---
const headerOne = document.querySelector('#headerOne');
const header    = document.querySelector('#header');

const placeholder = document.createElement('div');
placeholder.style.display = 'none';
header.insertAdjacentElement('afterend', placeholder);

// function setPlaceholderHeight() {
//   placeholder.style.height = header.offsetHeight + 'px';
// }
// setPlaceholderHeight();
// window.addEventListener('resize', setPlaceholderHeight);

// function stickOn() {
//   header.classList.add('fixed','top-0','left-0','right-0','z-50','bg-white/90','backdrop-blur','shadow');
//   placeholder.style.display = 'block';
//   projectDrop.style.marginTop = "400px"; // adjust dropdown spacing when fixed
// }
// function stickOff() {
//   header.classList.remove('fixed','top-0','left-0','right-0','z-50','bg-white/90','backdrop-blur','shadow');
//   placeholder.style.display = 'none';
// }

// if ('IntersectionObserver' in window) {
//   const io = new IntersectionObserver(([entry]) => {
//     entry.isIntersecting ? stickOff() : stickOn();
//   }, { threshold: 0 });
//   io.observe(headerOne);
// } else {
//   window.addEventListener('scroll', () => {
//     const rect = headerOne.getBoundingClientRect();
//     rect.bottom <= 0 ? stickOn() : stickOff();

//   }, { passive: true });
// }


