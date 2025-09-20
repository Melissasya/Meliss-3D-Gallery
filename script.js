/**
 * 3D-karusell för konstgalleri
 *
 * Inspiration och grundidé från Hoang Tran:
 * https://github.com/HoangTran0410/3DCarousel
 *
 * Jag har byggt vidare med egen kodstruktur, responsiv design,
 * interaktiva filter och spotlight-effekt.
 *
 * Författare: Meliss Asya Korkmaz
 * Datum: 2025-06-08
 */

// Anpassar radien (djupet) på karusellen utifrån skärmstorlek
const radiusMap = [
  { maxWidth: 500, radius: 100 },
  { maxWidth: 768, radius: 150 },
  { maxWidth: Infinity, radius: 300 },
];

// Hämtar relevanta DOM-element
const ospin = document.getElementById("carousel"); 
const aImg = ospin.getElementsByTagName("img"); 
const aEle = [...aImg]; 

let radius = 300; 
let tX = 0, 
  tY = 4; 

const ground = document.getElementById("ground"); 

function positionElements() {
  aEle.forEach((el, i) => {
    el.style.transform = `rotateY(${
      i * (360 / aEle.length)
    }deg) translateZ(${radius}px)`;
  });
}

function updateRadiusBasedOnScreen() {
  const width = window.innerWidth;
  radius = radiusMap.find((r) => width <= r.maxWidth).radius;
  ground.style.width = ground.style.height = `${radius * 4}px`;

  positionElements();
  applyTransform();
  updateImageFilters();
}

function init() {
  positionElements();
  aEle.forEach((el) => {
    el.style.transition = "none";
    el.style.transitionDelay = "0s";
  });
  ospin.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  updateImageFilters();
}

function enableTransition() {
  aEle.forEach((el) => (el.style.transition = "transform 1s"));
}

function applyTransform() {
  tY = Math.min(180, Math.max(0, tY));
  ospin.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  updateImageFilters();
}

["prev", "next"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    tX += ((id === "next" ? -1 : 1) * 360) / aEle.length;
    applyTransform();
  });
});

function updateImageFilters() {
  const num = aEle.length;
  const normalizedRotation = ((tX % 360) + 360) % 360;
  const anglePerItem = 360 / num;
  let frontIndex = Math.round(-normalizedRotation / anglePerItem) % num;
  if (frontIndex < 0) frontIndex += num;

  aEle.forEach((el, i) => {
    const isFront = i === frontIndex;
    el.style.filter = isFront ? "none" : "grayscale(100%) brightness(0.8)";
    el.style.zIndex = isFront ? "10" : "1";
    el.style.transition = "filter 0.5s ease";
  });

  const spotlight = document.getElementById("spotlight");
  const color =
    aEle[frontIndex].getAttribute("data-spotlight-color") || "#ffffff";
  spotlight.style.background = `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,0) 80%)`;
}

/**
 * Klick på bild → endast rotation till mitten (ingen overlay längre)
 */
aEle.forEach((el, index) => {
  el.style.cursor = "pointer";
  el.addEventListener("click", () => {
    const anglePerItem = 360 / aEle.length;
    tX = -index * anglePerItem;
    enableTransition();
    applyTransform();
  });
});

// Gör karusellen responsiv vid fönsterändring
window.addEventListener("resize", updateRadiusBasedOnScreen);

// Initierar allt vid sidladdning
updateRadiusBasedOnScreen();
init();
