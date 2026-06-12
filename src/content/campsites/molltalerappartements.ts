import type { CampsiteConfig } from "../types";

const IMG = "/campsites/molltalerappartements";

const molltalerappartements: CampsiteConfig = {
  name: "Mölltaler Appartements",
  shortName: "Mölltaler",
  slug: "molltalerappartements",
  ort: "Stall im Mölltal",
  region: "Kärnten",
  brandKind: "Stellplatz & Appartements",
  regionLong: "Nationalpark Hohe Tauern · Mölltal · Kärnten",

  heroVariant: "center",

  claim: "Dein Stellplatz im Herzen der Hohen Tauern",
  claimEmphasis: "Hohen Tauern",
  emailDetail: "eure Lage zwischen Raggaschlucht und Mölltaler Gletscher",
  intro:
    "Mitten im Nationalpark Hohe Tauern findest du bei uns einen ruhigen Wohnmobilstellplatz, dazu Appartements und Zimmer mit Frühstück — umgeben von Bergen, nah an Raggaschlucht, Gletscher und Grossglockner.",

  logo: { src: `${IMG}/logo.png`, alt: "Logo der Mölltaler Appartements mit grüner Berg- und Hüttenillustration" },

  statement: {
    text: "Stell den Camper dort ab, wo das Mölltal am stillsten ist — Berge ringsum, der Gletscher zum Greifen nah.",
    emphasis: "am stillsten",
  },

  pillars: [
    { title: "Garten mit Teich", text: "Ein gepflegter Gemeinschaftsgarten mit Teich lädt nach dem Wandertag zum Durchatmen ein.", image: { src: `${IMG}/garten-teich.webp`, alt: "Gemeinschaftsgarten mit Teich und Bergblick" } },
    { title: "Frühstück im Mölltal", text: "Frische, regionale Produkte am Morgen — im hellen Frühstücks- und Aufenthaltsraum.", image: { src: `${IMG}/fruehstuecksraum.webp`, alt: "Heller Frühstücks- und Aufenthaltsraum mit Buffet" } },
    { title: "Sonnenterrasse mit Bergblick", text: "Die Terrasse mit Blick ins Mölltal lädt nach der Wanderung zum Verweilen ein — bei Kaffee morgens und Bergpanorama am Abend.", image: { src: `${IMG}/sonnenterrasse.webp`, alt: "Sonnenterrasse mit Sitzgarnitur, Sonnenschirmen und weitem Blick ins grüne Mölltal" } },
  ],

  usps: ["Strom an jedem Platz", "Sauberes Sanitär", "Hunde willkommen", "Frühstück auf Wunsch", "Hot Tub im Winter", "Nah an Raggaschlucht"],

  trust: {
    heading: "Warum Camper hier Halt machen",
    headingEmphasis: "Halt machen",
    intro:
      "Ruhig im Tal, mit sauberem Sanitär, Strom an jedem Platz und Bergen ringsum — bei uns wird der Zwischenstopp auf dem Weg zum Grossglockner schnell zum eigentlichen Ziel.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-stellplatz.webp`, alt: "Wohnmobilstellplatz auf grüner Wiese im Mölltal, umgeben von Bergen" },
  },

  camping: {
    heading: "Wohnmobilstellplatz im Mölltal",
    intro:
      "Ein ruhiger Platz für kleine und große Camper — mit Strom, Frisch- und Abwasser, sauberem Sanitär und allem, was den Halt auf dem Weg durch die Hohen Tauern entspannt macht.",
    features: [
      { title: "Platz für klein & groß", text: "Ob kompakter Van oder großes Wohnmobil — der ebene Wiesenplatz hat überall einen Stromanschluss.", image: { src: `${IMG}/stellplatz-wiese.webp`, alt: "Ebener Wiesenplatz für Camper mit Bergen im Hintergrund" } },
      { title: "Frisch- & Abwasser", text: "Frischwasser tanken und Grauwasser entsorgen — die Versorgungsstation liegt direkt am Platz.", image: { src: `${IMG}/service-wasser.webp`, alt: "Versorgungsstation mit Wasseranschluss am Stellplatz" } },
      { title: "Saubere Sanitäranlagen", text: "Gepflegte Duschen, WC und Waschbecken in warmem Holz — sauber und gleich um die Ecke.", image: { src: `${IMG}/sanitaer-dusche.webp`, alt: "Saubere Dusche im holzverkleideten Sanitärraum" } },
      { title: "Gemütlicher Aufenthaltsraum", text: "Drinnen warten Sitzecken, ein Fernseher und Gesellschaftsspiele — der ideale Platz für einen geselligen Abend.", image: { src: `${IMG}/aufenthaltsraum.webp`, alt: "Gemütlicher Aufenthaltsraum mit Sitzecken" } },
      { title: "Brötchen & Kaffee", text: "Auf Wunsch starten wir deinen Tag mit frischen Brötchen und Kaffee aus dem Frühstücksraum.", image: { src: `${IMG}/fruehstueck-kaffee.webp`, alt: "Kaffee- und Frühstücksstation im Aufenthaltsraum" } },
      { title: "Natur vor der Tür", text: "Wanderwege beginnen in unmittelbarer Nähe, und die Raggaschlucht ist schnell mit dem Rad erreicht.", image: { src: `${IMG}/raggaschlucht.webp`, alt: "Fluss mit kleinem Wasserfall nahe dem Mölltaler Stellplatz" } },
    ],
  },

  mobilheime: {
    heading: "Appartements & Zimmer mit Frühstück",
    intro:
      "Neben dem Stellplatz findest du komfortable Ferienwohnungen und Zimmer mit Frühstück — ideal, wenn du das Mölltal lieber mit festem Dach über dem Kopf erkundest.",
    items: [
      { name: "Appartement", kind: "Ferienwohnung", text: "Komfortable Ferienwohnung mit eigener Küche und Essbereich — Platz für Familien und Freunde.", image: { src: `${IMG}/appartement-kueche.webp`, alt: "Küche und Essbereich eines Appartements" }, priceFrom: 85, features: ["Eigene Küche", "Wohnbereich", "Für Familien"] },
      { name: "Doppelzimmer mit Frühstück", kind: "Zimmer mit Frühstück", text: "Gemütliches Doppelzimmer inklusive Frühstück — ruhig gelegen, mit Zugang zum Aufenthaltsraum.", image: { src: `${IMG}/zimmer-doppel.webp`, alt: "Doppelzimmer mit zwei Einzelbetten" }, priceFrom: 110, features: ["Inkl. Frühstück", "Beheizter Skiraum", "Hunde willkommen"] },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Mölltal",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 (Tauernautobahn) bis Spittal/Möllbrücke, dann durchs Mölltal Richtung Stall — der Platz liegt in Pußtratten." },
      { title: "Zum Gletscher", text: "Zur Talstation der Mölltaler Gletscherbahn sind es rund 10 Minuten mit dem Auto." },
      { title: "Mit der Bahn", text: "Nächster Bahnhof an der Tauernbahn ist Obervellach — die letzte Etappe ins Tal nimmst du am besten mit dem Auto." },
    ],
  },

  galerie: {
    heading: "Ein Blick ins Mölltal",
    headingEmphasis: "Mölltal",
    intro: "Stellplatz, Garten und Gasträume — ein paar Eindrücke von deinem Halt in den Hohen Tauern.",
    tag: "Mölltal · Kärnten",
    images: [
      { src: `${IMG}/terrasse.webp`, alt: "Sonnenterrasse mit Sitzgelegenheiten und Bergblick" },
      { src: `${IMG}/appartement-wohnen.webp`, alt: "Heller Wohn- und Essbereich im Appartement" },
      { src: `${IMG}/zimmer-balkon.webp`, alt: "Zimmer mit Balkon und Blick auf die Berge" },
      { src: `${IMG}/sanitaer-wc.webp`, alt: "Holzverkleideter Sanitärraum am Stellplatz" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Mölltal",
    headingEmphasis: "im Mölltal",
    intro: "Wähle Zeitraum und Unterkunft — wir melden uns persönlich mit deiner Verfügbarkeit. Stellplatz, Appartement oder Zimmer mit Frühstück, ganz wie du magst.",
    pricesArePlaceholder: false,
    priceNote: "Stellplatz ab € 25/Nacht für 2 Personen inkl. Strom & Ver-/Entsorgung, jede weitere Person € 5 — zzgl. Kurtaxe. Zimmer & Appartements inkl. Frühstück, zzgl. Endreinigung.",
    highlight: { title: "Strom & Sanitär inklusive", text: "Strom, Wasser und Entsorgung gehören beim Stellplatz immer dazu." },
    categories: [
      { id: "stellplatz", label: "Wohnmobilstellplatz", perNight: 25, perExtraGuest: 5 },
      { id: "appartement", label: "Appartement", perNight: 85 },
      { id: "einzelzimmer", label: "Einzelzimmer mit Frühstück", perNight: 65 },
      { id: "doppelzimmer", label: "Doppelzimmer mit Frühstück", perNight: 110 },
    ],
  },

  kontakt: {
    coords: { lat: 46.889987, lng: 13.044046 },
    tel: "+43 664 384 0493",
    telHref: "tel:+436643804493",
    mail: "info@molltalerappartements.at",
    facebook: "https://facebook.com/molltalerappartements",
    adresse: "Pußtratten 13 · 9832 Stall im Mölltal · Kärnten",
  },

  languages: ["DE", "EN", "NL", "IT"],

  nav: [
    { label: "Stellplatz", href: "#camping", children: [
      { label: "Stellplatz", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Appartements", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default molltalerappartements;
