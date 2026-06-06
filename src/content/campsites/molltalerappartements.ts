import type { CampsiteConfig } from "../types";

/**
 * Mölltaler Appartements — Pusstratten 13, 9832 Stall im Mölltal, Kärnten.
 * Alle Texte/Fakten belegt aus molltalerappartements.at (Stand-Scrape 2026-06,
 * dt./engl./nl. Sprachversionen). Bilder = ausschließlich eigene Fotos des
 * Hauses in /public/campsites/molltalerappartements/ (jedes per Vision geprüft).
 * EHRLICH:
 *  - KEIN See am Platz → `see` ausgelassen. Es gibt einen Gemeinschaftsgarten
 *    mit Teich und den Fluss Möll mit kleinem Wasserfall in der Nähe — nie als
 *    "am See" geframt.
 *  - Angebot = Appartements/Ferienwohnungen + Zimmer mit Frühstück + Wohnmobil-
 *    stellplatz. brandKind ehrlich "Appartements & Stellplatz".
 *  - Keine Auszeichnung eindeutig belegt → awards bleibt leer.
 *  - Preise real von der Preisseite übernommen (siehe REPORT.md).
 *  - Keine Koordinaten in den Quelldaten → coords ausgelassen (Karte aus,
 *    Adresse wird gezeigt).
 */
const IMG = "/campsites/molltalerappartements";

export const molltalerappartements: CampsiteConfig = {
  name: "Mölltaler Appartements",
  shortName: "Mölltaler Appartements",
  slug: "molltalerappartements",
  ort: "Stall im Mölltal",
  region: "Kärnten",
  brandKind: "Appartements & Stellplatz",
  // Kein See am Platz → bewusst ausgelassen.
  regionLong: "Mölltal · Nationalpark Hohe Tauern · Kärnten · Österreich",

  claim: "Urlaub im Mölltal — im Herzen des Nationalparks Hohe Tauern",
  claimEmphasis: "im Herzen des Nationalparks Hohe Tauern",
  intro:
    "Charmante Appartements & Ferienwohnungen, Zimmer mit Frühstück und ein gut ausgestatteter Wohnmobilstellplatz — ruhig im Mölltal in Kärnten gelegen, umgeben von den Bergen des Nationalparks Hohe Tauern.",

  logo: { src: `${IMG}/logo.png`, alt: "Mölltaler Appartements Logo" },

  statement: {
    text: "Bei uns findest du den perfekten Zwischenstopp — komfortabel übernachten, ankommen und die Natur des Mölltals in vollen Zügen genießen.",
    emphasis: "den perfekten Zwischenstopp",
  },

  pillars: [
    {
      title: "Garten mit Teich & Bergblick",
      text: "Ein liebevoll angelegter Gemeinschaftsgarten mit Teich lädt zum Entspannen nach einem aktiven Tag ein — mit Blick auf die umliegenden Berge.",
      image: { src: `${IMG}/garten-teich.webp`, alt: "Gemeinschaftsgarten mit Teich, rotem Zaun und Bergen im Hintergrund" },
    },
    {
      title: "Drei Arten zu übernachten",
      text: "Appartement & Ferienwohnung, Zimmer mit Frühstück oder Stellplatz fürs Wohnmobil — du wählst, wie du wohnen möchtest.",
      image: { src: `${IMG}/haus.webp`, alt: "Das Haupthaus der Mölltaler Appartements mit Balkonen, davor der Garten" },
    },
    {
      title: "Frühstück & Aufenthaltsraum",
      text: "Frischer, regionaler Start in den Tag im gemütlichen Frühstücksraum — tagsüber lädt der Aufenthaltsraum mit Gesellschaftsspielen zum Verweilen ein.",
      image: { src: `${IMG}/fruehstuecksraum.webp`, alt: "Gemütlicher Frühstücks- und Aufenthaltsraum mit Sitznischen und Holzbalken" },
    },
  ],

  usps: [
    "Mitten im Nationalpark Hohe Tauern",
    "Appartements, Zimmer & Stellplatz",
    "Frühstück mit regionalen Produkten",
    "Hunde willkommen",
    "Gemeinschaftsgarten mit Teich",
    "Hottub & Skiraum im Winter",
  ],

  trust: {
    heading: "Worauf du dich bei den Mölltaler Appartements verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Herzlich und mehrsprachig betreut, zentral im Mölltal gelegen — mit Frühstücksraum, Gemeinschaftsgarten mit Teich und einem ruhigen Wohnmobilstellplatz für entspannte Tage in den Bergen Kärntens.",
  },

  // Keine eindeutig belegte Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  // Quelle nennt keine festen Saisondaten; Winter- (Hottub, Skiraum, Rodeln) und
  // Sommerangebote (Wandern, Rafting) + "Mo–So 24 Stunden geöffnet" → ganzjährig.
  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: {
      src: `${IMG}/hero-stellplatz-berge.webp`,
      alt: "Mölltaler Appartements im Mölltal: Wiese mit Stellplätzen vor dem Haus, umgeben von bewaldeten Bergen",
    },
  },

  camping: {
    heading: "Wohnmobilstellplatz im Mölltal",
    intro:
      "Ein ruhiger, gut ausgestatteter Stellplatz mitten im Mölltal — nahe der Raggaschlucht, nur wenige Minuten zur Talstation der Mölltaler Gletscherbahn und ideal als Tappe an der Grossglockner Hochalpenstraße. Geeignet für kleine wie große Wohnmobile.",
    features: [
      {
        title: "Ruhig auf der Wiese",
        text: "Stellplätze auf grüner Wiese, umgeben von Bäumen und Bergen — ruhige Lage im Tal, gut erreichbar.",
        image: { src: `${IMG}/stellplatz-wiese.webp`, alt: "Wiese mit Stellplätzen, Bergen und Tal im Mölltal" },
      },
      {
        title: "Dusche & Sanitär",
        text: "Saubere, gepflegte Sanitäranlagen mit warmer Dusche — für unbeschwertes Campen.",
        image: { src: `${IMG}/sanitaer-dusche.webp`, alt: "Saubere Duschkabine in der Sanitäranlage des Stellplatzes" },
      },
      {
        title: "WC & Waschraum",
        text: "WC und Waschbecken direkt am Platz, ordentlich und sauber gehalten.",
        image: { src: `${IMG}/sanitaer-wc.webp`, alt: "Sauberes WC mit Holzverkleidung am Wohnmobilstellplatz" },
      },
      {
        title: "Strom, Wasser & Entsorgung",
        text: "Stromanschluss, Frischwasser sowie Entsorgung von Grauwasser und WC — alles vor Ort.",
        image: { src: `${IMG}/versorgung-spuele.webp`, alt: "Outdoor-Spülplatz mit Spüle und Warmwasser am Stellplatz" },
      },
      {
        title: "Sonnenterrasse & Hottub",
        text: "Eine Terrasse mit Bergblick zum Verweilen — im Winterhalbjahr steht zusätzlich ein Hottub bereit (Voranmeldung). Hunde sind willkommen.",
        image: { src: `${IMG}/terrasse-hottub.webp`, alt: "Terrasse mit Sitzplätzen, Hottub und Bergen im Hintergrund" },
      },
    ],
  },

  mobilheime: {
    heading: "Appartements & Zimmer mit Frühstück",
    intro:
      "Lieber feste Wände? Charmant eingerichtete Ferienwohnungen mit eigener Küche und gemütliche Zimmer mit Frühstück — viele mit Balkon oder Terrasse zum Garten.",
    items: [
      {
        name: "Appartement Wasserfall",
        kind: "Ferienwohnung · eigene Küche",
        text: "Charmante Erdgeschoss-Ferienwohnung mit eigener, gut ausgestatteter Küche, separatem Schlafzimmer und privater Terrasse zum Gemeinschaftsgarten — ideal für zwei Personen, Hund willkommen.",
        image: { src: `${IMG}/appartement-kueche.webp`, alt: "Voll ausgestattete Küche mit Essbereich im Appartement Wasserfall" },
        priceFrom: 85,
        features: ["bis 2 Personen", "eigene Küche & Bad", "Terrasse am Garten", "Hund willkommen"],
      },
      {
        name: "Doppelzimmer mit Frühstück",
        kind: "Zimmer · mit Frühstück",
        text: "Gemütliches Zimmer für zwei mit eigenem Bad und reichhaltigem Frühstück im Frühstücksraum — der entspannte Start in den Urlaubstag.",
        image: { src: `${IMG}/doppelzimmer.webp`, alt: "Doppelzimmer mit zwei Betten und eigenem Bad" },
        priceFrom: 110,
        features: ["2 Personen", "Frühstück inklusive", "eigenes Bad"],
      },
      {
        name: "Zimmer mit Frühstück & Balkon",
        kind: "Einzel- & Doppelzimmer",
        text: "Helle Zimmer mit Frühstück, eigenem Bad, TV sowie Kaffee- und Teezubereitung im Zimmer — teils mit Balkon und Blick ins Grüne. Einzelzimmer ab 65 €.",
        image: { src: `${IMG}/zimmer-balkon.webp`, alt: "Zimmer mit Betten, TV, Kaffeestation und Balkon mit Blick ins Grüne" },
        priceFrom: 65,
        features: ["Frühstück inklusive", "TV, Kaffee & Tee", "teils mit Balkon"],
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Pusstratten 13 in 9832 Stall, mitten im Mölltal — ideale Tappe an der Grossglockner Hochalpenstraße, nahe der Raggaschlucht.",
      },
      {
        title: "Ausflüge & Lage",
        text: "Nur wenige Autominuten zur Talstation der Mölltaler Gletscherbahn; rundum Wander- und Radwege, Rafting und Canyoning im Tal.",
      },
      {
        title: "Für Motorradfahrer",
        text: "Überdachter Carport für die Maschine — sicher und trocken. Traumstraßen wie Grossglockner, Nockalmstraße und Stilfser Joch liegen vor der Tür.",
      },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Berge, Fluss, Garten und gemütliche Räume — ein paar Eindrücke von den Mölltaler Appartements in Stall.",
    tag: "Mölltal · Hohe Tauern",
    images: [
      { src: `${IMG}/moell-wasserfall.webp`, alt: "Der Fluss Möll mit kleinem Wasserfall in der Nähe des Hauses" },
      { src: `${IMG}/terrasse-talblick.webp`, alt: "Sonnenterrasse mit Sonnenschirmen und Blick ins grüne Tal" },
      { src: `${IMG}/fruehstueck-buffet.webp`, alt: "Frühstücksraum mit Buffet und gedeckten Tischen" },
      { src: `${IMG}/appartement-schlafzimmer.webp`, alt: "Gemütliches Schlafzimmer im Appartement" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — wir melden uns mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise · Stellplatz inkl. Kurtaxe (2 Pers.), je weitere Person 5 €/Nacht · Zimmer inkl. Frühstück · zzgl. evtl. Endreinigung & Kurtaxe",
    highlight: {
      title: "Kärnten Card inklusive",
      text: "Mit der Kärnten Card freier Eintritt zu vielen Ausflugszielen der Region. Frühstücksraum, Aufenthaltsraum und Gemeinschaftsgarten stehen allen Gästen offen.",
    },
    categories: [
      // Reale Preise von molltalerappartements.at/prijzen + Stellplatz-Seite (siehe REPORT.md).
      { id: "stellplatz", label: "Wohnmobilstellplatz", perNight: 25, perExtraGuest: 5 },
      { id: "appartement", label: "Appartement", perNight: 85, perExtraGuest: 0 },
      { id: "einzelzimmer", label: "Einzelzimmer + Frühstück", perNight: 65, perExtraGuest: 0 },
      { id: "doppelzimmer", label: "Doppelzimmer + Frühstück", perNight: 110, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.887883, lng: 13.043365 },
    tel: "+43 664 380 4493",
    telHref: "tel:+436643804493",
    mail: "info@molltalerappartements.at",
    facebook: "https://facebook.com/molltalerappartements",
    adresse: "Pusstratten 13 · 9832 Stall im Mölltal · Kärnten",
    // Keine Koordinaten in den Quelldaten → bewusst ausgelassen (Karte aus).
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Appartements", href: "#mobilheime" },
        { label: "Zimmer mit Frühstück", href: "#mobilheime" },
        { label: "Frühstücksraum", href: "#mobilheime" },
      ],
    },
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Wohnmobilstellplatz", href: "#camping" },
        { label: "Sanitär & Versorgung", href: "#camping" },
        { label: "Terrasse & Hottub", href: "#camping" },
      ],
    },
    {
      label: "Lage & Aktiv",
      href: "#anreise",
      children: [
        { label: "Mölltaler Gletscher", href: "#anreise" },
        { label: "Raggaschlucht", href: "#anreise" },
        { label: "Für Motorradfahrer", href: "#anreise" },
      ],
    },
    {
      label: "Preise & Kontakt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default molltalerappartements;
