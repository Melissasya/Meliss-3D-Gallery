/**
 * artData – Innehåller metadata för varje konstverk i galleriet
 *
 * Arrayen används för att koppla detaljerad information till varje bild i karusellen.
 * Indexordningen i arrayen matchar exakt bildordningen i HTML:ens <img>-element.
 * Denna struktur gör det enkelt att visa rätt data i overlay när ett konstverk klickas.
 *
 * Varje objekt innehåller:
 * - title: Verkets titel
 * - description: Kort beskrivning
 * - medium: Teknik
 * - size: Storlek
 * - year: Årtal
 * - image: Bildens filväg (visas även i overlay)
 *
 * Författare: Meliss Asya Korkmaz
 * Datum: 2025-06-08
 */

const artData = [
  {
    title: "COURTSIDE",
    description:
      "Sunny day on a tennis court, shielding her eyes from the sun.",
    medium: "Medium: Watercolour",
    size: "Size: 20x30 cm",
    year: "Year: 2024",
    image: "img/konstverk_1.jpg",
  },
  {
    title: "1 AV 3 KVINNOR",
    description:
      "Poster design for an Amnesty event raising awareness about domestic violence against women.",
    medium: "Medium: Digital art",
    size: "Size: A3",
    year: "Year: 2025",
    image: "img/konstverk_2.jpg",
  },
  {
    title: "BLEEDING LOVE",
    description:
      "Illustrated homage to Bleeding Love, Robert Wun’s haute couture wedding dress.",
    medium: "Medium: Mixed media",
    size: "Size: 30×40 cm",
    year: "Year: 2024",
    image: "img/konstverk_3.jpg",
  },
  {
    title: "MY BODY IS NO WEAPON!",
    description:
      "Poster design for an Amnesty event highlighting the humanitarian crisis in Congo-Kinshasa.",
    medium: "Medium: Digital art",
    size: "Size: A3",
    year: "Year: 2025",
    image: "img/konstverk_4.jpg",
  },
  {
    title: "LOKUM",
    description: "Centered on the charm of Turkish delight.",
    medium: "Medium: Mixed media",
    size: "Size: 60×90 cm",
    year: "Year: 2025",
    image: "img/konstverk_5.jpg",
  },
  {
    title: "SUNSET DRIVE",
    description:
      "Freedom, fashion, motion, sunshine - the essence of vacation.",
    medium: "Medium: Watercolour",
    size: "Size: 20×30 cm",
    year: "Year: 2024",
    image: "img/konstverk_6.jpg",
  },
  {
    title: "KANGAL",
    description: "Two Kangals locked in a primal confrontation.",
    medium: "Medium: Mixed media",
    size: "Size: 20×30 cm",
    year: "Year: 2024",
    image: "img/konstverk_7.jpg",
  },
  {
    title: "RUYA",
    description: "A young turkish woman adorned in traditional attire.",
    medium: "Medium: Mixed media",
    size: "Size: 20×30 cm",
    year: "Year: 2024",
    image: "img/konstverk_8.jpg",
  },
  {
    title: "FLORAL MUSE",
    description:
      "An illustration paying tribute to the iconic flower dress from Robert Wun’s homecoming collection.",
    medium: "Medium: Mixed media",
    size: "Size: 30×40 cm",
    year: "Year: 2024",
    image: "img/konstverk_9.jpg",
  },
];
