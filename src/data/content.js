export const NAV_LINKS = [
  { id: "villaggio", label: "Il Villaggio" },
  { id: "ristorante", label: "Il Ristorante" },
  { id: "menu", label: "Il Menu" },
  { id: "ideale-per", label: "Ideale Per" },
  { id: "recensioni", label: "Recensioni" },
  { id: "contatti", label: "Contatti" },
];

export const MENU = [
  {
    category: "Antipasti",
    items: [
      { name: "Antipasto Mulino", desc: "Misto di salumi, formaggi e ricottina fresca della casa", signature: true },
    ],
  },
  {
    category: "Primi Piatti",
    items: [
      { name: "Tagliatelle ai Funghi Porcini e Tartufo Nero", desc: "Pasta fresca con funghi di bosco e tartufo nero molisano" },
      { name: "Nidi di Canarini al Sugo", desc: "La specialità della casa, ricetta tramandata in famiglia", signature: true },
      { name: "Pasta e Fagioli", desc: "Il piatto della tradizione contadina molisana" },
      { name: "Polenta", desc: "Calda e cremosa, secondo la tradizione di montagna" },
    ],
  },
  {
    category: "Secondi Piatti",
    items: [
      { name: "Grigliata Mista di Carne", desc: "Carni selezionate cotte alla brace, come nella tradizione del villaggio", signature: true },
      { name: "Bistecca di Vitello", desc: "Cotta al punto giusto sulla brace viva" },
      { name: "Scamorza alla Brace", desc: "Filante e affumicata, cotta sul fuoco vivo" },
      { name: "Arrosto Misto", desc: "Agnello, salsiccia e maialino cotti lentamente al forno" },
    ],
  },
  {
    category: "Pizza",
    items: [
      { name: "Pizza", desc: "Leggera e gustosa, impasto della casa a lunga lievitazione" },
    ],
  },
  {
    category: "Dolci",
    items: [
      { name: "Torta Noci e Mele", desc: "Dolce della casa, fatto in casa ogni giorno" },
      { name: "Sorbetto al Limone", desc: "Fresco e leggero, perfetto a fine pasto" },
    ],
  },
  {
    category: "Da Bere",
    items: [
      { name: "Vino alla Spina", desc: "Vino locale servito alla spina, come da tradizione" },
      { name: "Caffè", desc: "Per chiudere in compagnia, prima di tornare al parco" },
    ],
  },
];

export const REVIEWS = [
  { quote: "Un luogo paradisiaco immerso nella natura: fauna e flora magnifiche, laghetto, ruscelli e animali. Una vera oasi verde.", author: "Ospite", source: "Google" },
  { quote: "Eccellente cibo a prezzo onesto, proprietari e personale cortesissimi. Tutto genuino e di qualità — una perla rara.", author: "Recensione", source: "Google · Agosto 2024" },
  { quote: "Le tagliatelle ai porcini sono perfette, il misto alla brace ottimo, la scamorza alla brace e il pane casereccio squisiti.", author: "Cliente", source: "TripAdvisor" },
  { quote: "Posto bellissimo per le famiglie: parco giochi, laghetto, animali, cascata. E al ristorante si mangia davvero bene.", author: "Famiglia in visita", source: "Google" },
  { quote: "Tornati a distanza di un anno: meraviglioso. Ottimo per i bambini, laghetto per la pesca e tanto spazio verde.", author: "Habitué", source: "TripAdvisor" },
  { quote: "Piatti tipici molisani molto buoni e prezzi democratici. Sempre bello ritornarci.", author: "Tasillo", source: "Google" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/518442/pexels-photo-518442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
  villaggio: "https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
  ristorante: "https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  primi: "https://images.pexels.com/photos/12866988/pexels-photo-12866988.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  grigliata: "https://images.pexels.com/photos/8250702/pexels-photo-8250702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  pizza: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  famiglie: "https://images.pexels.com/photos/5727780/pexels-photo-5727780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  parcoGiochi: "https://images.pexels.com/photos/35136501/pexels-photo-35136501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  picnic: "https://images.pexels.com/photos/8208772/pexels-photo-8208772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
};

export const INFO = {
  name: "Ripa dei Forti Village",
  tagline: "Un'oasi verde nel cuore del Molise. Natura, cucina genuina, relax per tutta la famiglia.",
  address: "Contrada Macchie — 86096 Santa Maria del Molise (IS), Molise",
  addressNote: "Villaggio naturalistico con parco, laghetti e ristorante, immerso nel verde del Molise",
  hours: "Tutti i giorni 9:00–23:00",
  phone: "+39 0865 817216",
  parkingNote: "Parcheggio gratuito",
  googleRating: { value: "4.5", count: 253 },
  tripadvisorBadge: "Travelers' Choice",
  mapEmbed: "https://www.google.com/maps?q=41.5458125,14.3640625&output=embed",
};
