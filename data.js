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
    medium: "Medium: Watercolour",
    size: "Size: 20x30 cm",
    year: "Year: 2024",
    image: "img/konstverk_1.jpg",
  },
  {
    title: "1 AV 3 KVINNOR",
    medium: "Medium: Digital art",
    size: "Size: A3",
    year: "Year: 2025",
    image: "img/konstverk_2.jpg",
  },
  {
    title: "BLEEDING LOVE",
    medium: "Medium: Mixed media",
    size: "Size: 30×40 cm",
    year: "Year: 2024",
    image: "img/konstverk_3.jpg",
  },
  {
    title: "MY BODY IS NO WEAPON!",
    medium: "Medium: Digital art",
    size: "Size: A3",
    year: "Year: 2025",
    image: "img/konstverk_4.jpg",
  },
  {
    title: "LOKUM",
    medium: "Medium: Mixed media",
    size: "Size: 60×90 cm",
    year: "Year: 2025",
    image: "img/konstverk_5.jpg",
  },
  {
    title: "SUNSET DRIVE",
    medium: "Medium: Watercolour",
    size: "Size: 20×30 cm",
    year: "Year: 2024",
    image: "img/konstverk_6.jpg",
  },
  {
    title: "KANGAL",
    medium: "Medium: Mixed media",
    size: "Size: 20×30 cm",
    year: "Year: 2024",
    image: "img/konstverk_7.jpg",
  },
  {
    title: "RUYA",
    medium: "Medium: Mixed media",
    size: "Size: 20×30 cm",
    year: "Year: 2024",
    image: "img/konstverk_8.jpg",
  },
  {
    title: "FLORAL MUSE",
    medium: "Medium: Mixed media",
    size: "Size: 30×40 cm",
    year: "Year: 2024",
    image: "img/konstverk_9.jpg",
  },
];


