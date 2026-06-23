import { Reveal } from "./Reveal";
import { INFO, IMAGES } from "../../data/content";
import { Award } from "lucide-react";

export const About = () => {
  return (
    <section data-testid="about" id="ristorante" className="bg-cream py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <img
                src={IMAGES.ristorante}
                alt="Grigliata mista cotta alla brace a Ripa dei Forti Village"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-44 border-l-2 border-b-2 border-gold p-5 bg-cream">
                <p className="font-heading text-4xl text-sienna leading-none">{INFO.googleRating.value}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-text-secondary mt-2">Google Reviews</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Il Ristorante</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-dark leading-tight mb-8">
              Cucina molisana genuina, dalla gestione familiare di sempre.
            </h2>
            <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed">
              <p>
                Il ristorante di <strong className="text-dark font-normal">Ripa dei Forti Village</strong> è gestito da
                sempre in famiglia, con la stessa cura di una cucina di casa: ingredienti genuini, materie prime del
                territorio molisano e ricette che si tramandano da generazioni.
              </p>
              <p>
                Tra i piatti più amati, i <strong className="text-sienna font-normal">Nidi di Canarini al sugo</strong>,
                specialità della casa, e la <strong className="text-sienna font-normal">grigliata mista alla brace</strong>.
                Da accompagnare con il nostro <strong className="text-sienna font-normal">vino alla spina</strong>, come da
                tradizione.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-9 border border-gold/40 p-5">
              <Award className="text-gold shrink-0" size={32} strokeWidth={1.4} />
              <p className="text-sm text-text-secondary">
                <span className="text-dark font-semibold">{INFO.tripadvisorBadge}</span> — riconoscimento TripAdvisor, oltre a
                un punteggio di {INFO.googleRating.value}/5 su {INFO.googleRating.count} recensioni Google.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
