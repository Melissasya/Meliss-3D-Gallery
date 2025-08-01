/**
 * 3D-karusell för konstgalleri
 *
 * Inspiration och grundidé från Hoang Tran:
 * https://github.com/HoangTran0410/3DCarousel
 *
 * Jag har byggt vidare med egen kodstruktur, responsiv design,
 * overlay-funktionalitet och interaktiva filter.
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
const ospin = document.getElementById("carousel"); // Inre karusell (innehåller bilder)
const aImg = ospin.getElementsByTagName("img"); // Alla <img>-element
const aEle = [...aImg]; // Gör <img>-listan till en array för enklare iteration

let radius = 300; // Standardradie
let tX = 0, // Rotation på Y-axeln (horisontell)
  tY = 4; // Rotation på X-axeln (lätt lutning uppifrån)

const ground = document.getElementById("ground"); // Skuggplatta under karusellen

/**
 * Placerar ut varje bild i en cirkel kring Z-axeln
 */

function positionElements() {
  aEle.forEach((el, i) => {
    el.style.transform = `rotateY(${
      i * (360 / aEle.length)
    }deg) translateZ(${radius}px)`;
  });
}

/**
 * Uppdaterar radien dynamiskt vid olika skärmstorlekar
 */
function updateRadiusBasedOnScreen() {
  const width = window.innerWidth;
  radius = radiusMap.find((r) => width <= r.maxWidth).radius;
  // Anpassar även markens storlek så spotlight ser rätt ut
  ground.style.width = ground.style.height = `${radius * 4}px`;

  positionElements();
  applyTransform(); // Återapplicera rotation med ny radie
  updateImageFilters(); // Kollar vilket verk som nu hamnar i front
}

/**
 * Initierar karusellen utan animationseffekter
 */
function init() {
  positionElements();
  aEle.forEach((el) => {
    el.style.transition = "none";
    el.style.transitionDelay = "0s";
  });
  ospin.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  updateImageFilters();
}

/**
 * Slår på animationseffekter efter första init
 */
function enableTransition() {
  aEle.forEach((el) => (el.style.transition = "transform 1s"));
}

/**
 * Applicerar aktuell rotation och uppdaterar visuellt fokus
 */
function applyTransform() {
  // Begränsar vertikal lutning så den inte kan roteras upp/ner helt
  tY = Math.min(180, Math.max(0, tY));
  ospin.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  updateImageFilters();
}

/**
 * Pilar för att rotera karusellen (vänster/höger)
 * "Next" roterar åt vänster för att framhäva nästa konstverk
 */
["prev", "next"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    tX += ((id === "next" ? -1 : 1) * 360) / aEle.length;
    applyTransform();
  });
});

/**
 * Markerar det konstverk som är närmast fronten (mitt i karusellen)
 * – Lyfter det visuellt med spotlight, färg, ljus och z-index
 */
function updateImageFilters() {
  const num = aEle.length;
  const normalizedRotation = ((tX % 360) + 360) % 360;
  const anglePerItem = 360 / num;
  // Identifierar vilket element som är i fokus
  let frontIndex = Math.round(-normalizedRotation / anglePerItem) % num;
  if (frontIndex < 0) frontIndex += num;

  // Uppdaterar varje bilds filter och djup
  aEle.forEach((el, i) => {
    const isFront = i === frontIndex;
    el.style.filter = isFront ? "none" : "grayscale(100%) brightness(0.8)";
    el.style.zIndex = isFront ? "10" : "1";
    el.style.transition = "filter 0.5s ease";
  });

  // Spotlight-färg hämtas från img-attribut
  const spotlight = document.getElementById("spotlight");
  const color =
    aEle[frontIndex].getAttribute("data-spotlight-color") || "#ffffff";
  spotlight.style.background = `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,0) 80%)`;
}

/**
 * Overlay-funktion för att visa mer info om konstverket vid klick
 * Hämtar data från `artData` och visar i panel
 */
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayDesc = document.getElementById("overlay-desc");
const overlayMedium = document.getElementById("overlay-medium");
const overlaySize = document.getElementById("overlay-size");
const overlayYear = document.getElementById("overlay-year");
const overlayCloseBtn = document.getElementById("overlay-close");
const overlayImage = document.getElementById("overlay-image");

// Lägger till klick-event på varje bild
aEle.forEach((el, index) => {
  el.style.cursor = "pointer";
  el.addEventListener("click", () => {
    // Roterar bilden till mitten
    const anglePerItem = 360 / aEle.length;
    tX = -index * anglePerItem;
    enableTransition();
    applyTransform();

    // Visar data från artData
    const art = artData[index];
    overlayTitle.textContent = art.title;
    overlayDesc.textContent = art.description;
    overlayMedium.textContent = art.medium;
    overlaySize.textContent = art.size;
    overlayYear.textContent = art.year;

    // Visar bild i overlay
    if (art.image) {
      overlayImage.src = art.image;
      overlayImage.alt = art.title || "Bild på konstverket";
      overlayImage.style.display = "block";
    } else {
      overlayImage.src = "";
      overlayImage.alt = "";
      overlayImage.style.display = "none";
    }

    overlay.classList.remove("hidden");
  });
});

// Stänger overlay med X-knapp
overlayCloseBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Gör karusellen responsiv vid fönsterändring
window.addEventListener("resize", updateRadiusBasedOnScreen);

// Initierar allt vid sidladdning
updateRadiusBasedOnScreen();
init();
