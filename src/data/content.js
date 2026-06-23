export const NAV_LINKS = [
  { id: "chi-siamo", label: "Chi Siamo" },
  { id: "menu", label: "Il Menu" },
  { id: "territorio", label: "Il Territorio" },
  { id: "recensioni", label: "Recensioni" },
  { id: "contatti", label: "Contatti" },
];

export const MENU = [
  {
    category: "Antipasti",
    items: [
      { name: "Antipasto Misto", desc: "Selezione di salumi e formaggi del territorio molisano" },
      { name: "Bruschette Miste", desc: "Pane casereccio tostato con condimenti della tradizione" },
      { name: "Crocchette di Patate", desc: "Omaggio della casa per iniziare il pasto", signature: true },
    ],
  },
  {
    category: "Primi Piatti",
    items: [
      { name: "Fettuccine al Cinghiale", desc: "Ragù di cinghiale lentamente brasato, ricetta della tradizione molisana", signature: true },
      { name: "Tagliatelle Funghi e Salsiccia", desc: "Funghi di bosco e salsiccia del contadino" },
      { name: "Spaghetti alla Chitarra con Ortica e Pomodori Confit", desc: "Pasta tirata al mattarello, ortica selvatica e pomodorini confit" },
      { name: "Ravioloni alla Scapolese", desc: "Fatti a mano ogni giorno, secondo la ricetta della casa", signature: true },
    ],
  },
  {
    category: "Secondi Piatti",
    items: [
      { name: "Arrosto Misto di Carni", desc: "Agnello, salsiccia, maialino e manzo cotti al forno della Torre" },
    ],
  },
  {
    category: "Pizze e Calzoni",
    items: [
      { name: "Calzoni Fritti al Gorgonzola", desc: "Impasto fritto e gonfio, ripieno filante al gorgonzola", signature: true },
      { name: "Pizze", desc: "Impasto della casa, cotte secondo la tradizione dell'osteria" },
    ],
  },
];

export const REVIEWS = [
  { quote: "Un'evocativa location dentro un castello medievale, con vista panoramica sulla valle. Un posto che resta nel cuore.", author: "Ospite TripAdvisor", source: "TripAdvisor" },
  { quote: "Rosa in cucina è bravissima, si sente la passione in ogni piatto che arriva in tavola.", author: "Cliente", source: "Google" },
  { quote: "Davide ci ha accolti come fossimo di famiglia, raccontandoci anche la storia del borgo. Accoglienza impeccabile.", author: "Cliente", source: "Google" },
  { quote: "Prezzi onestissimi per la qualità e l'abbondanza dei piatti. Rapporto qualità-prezzo eccellente.", author: "Ospite", source: "TripAdvisor" },
  { quote: "Tramonto mozzafiato dalla terrazza, con la valle di Isernia che si apre davanti agli occhi.", author: "Cliente", source: "Google" },
  { quote: "Le fettuccine al cinghiale e i ravioloni fatti a mano sono un'esperienza da non perdere a Fornelli.", author: "Ospite", source: "TripAdvisor" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/18455434/pexels-photo-18455434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
  chef: "https://images.pexels.com/photos/5251019/pexels-photo-5251019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  territory: "https://images.pexels.com/photos/17125428/pexels-photo-17125428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
  pastaCinghiale: "https://images.pexels.com/photos/12866988/pexels-photo-12866988.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  pastaFunghi: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  antipasto: "https://images.pexels.com/photos/13084371/pexels-photo-13084371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
};

export const INFO = {
  name: "La Vecchia Torre Osteria Ristorante",
  tagline: "Cucina di territorio dentro le mura medievali di Fornelli, tra sapori autentici e vista sulla valle.",
  address: "Piazza Municipio, 1 — 86070 Fornelli (IS), Molise",
  addressNote: "Dentro la cinta muraria medievale del borgo, con vista panoramica sulla valle di Isernia",
  hours: "Martedì–Domenica 12:30–15:00 e 19:30–23:00 · Chiuso il Lunedì",
  phone: "+39 333 678 2068",
  priceRange: "Prezzo medio €20–30 a persona",
  chef: "Rosa",
  host: "Davide",
  mapEmbed: "https://www.google.com/maps?q=41.6067585,14.1401206&output=embed",
};
