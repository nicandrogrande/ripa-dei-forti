import { Reveal } from "./Reveal";
import { INFO, IMAGES } from "../../data/content";
import { Award } from "lucide-react";

export const About = () => {
  return (
    <section data-testid="about" id="chi-siamo" className="bg-cream py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <img
                src={IMAGES.chef}
                alt="Rosa ai fornelli dell'osteria"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-44 border-l-2 border-b-2 border-gold p-5 bg-cream">
                <p className="font-heading text-4xl text-sienna leading-none">4.4</p>
                <p className="text-xs uppercase tracking-[0.18em] text-text-secondary mt-2">TripAdvisor</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Chi Siamo</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-dark leading-tight mb-8">
              Un'osteria dentro le mura medievali dove ogni piatto è una storia del Molise.
            </h2>
            <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed">
              <p>
                Dentro la cinta muraria di Fornelli, <strong className="text-dark font-normal">La Vecchia Torre</strong> nasce
                dalle mani di <strong className="text-dark font-normal">Rosa</strong>, che cura la cucina con passione, e
                dall'accoglienza di <strong className="text-dark font-normal">Davide</strong>, che cura la sala con il
                calore di una casa di famiglia.
              </p>
              <p>
                Qui la tradizione molisana prende forma in piatti come le <strong className="text-sienna font-normal">fettuccine al cinghiale</strong> e
                i <strong className="text-sienna font-normal">ravioloni alla scapolese</strong> fatti a mano. Materie prime del
                territorio, pasta fresca e cotture lente raccontano una terra autentica e generosa, con la valle di Isernia a fare da sfondo.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-9 border border-gold/40 p-5">
              <Award className="text-gold shrink-0" size={32} strokeWidth={1.4} />
              <p className="text-sm text-text-secondary">
                <span className="text-dark font-semibold">Travelers' Choice</span> — riconoscimento TripAdvisor, con
                valutazione 4.4/5 su 65 recensioni.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
