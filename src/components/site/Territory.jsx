import { Reveal } from "./Reveal";
import { IMAGES } from "../../data/content";

export const Territory = () => {
  return (
    <section data-testid="territory" id="territorio" className="relative py-28 lg:py-44 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${IMAGES.territory})` }}
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="max-w-2xl border border-cream/25 backdrop-blur-sm bg-dark/20 p-10 lg:p-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Il Territorio</p>
          <h2 className="font-heading font-light text-4xl lg:text-5xl text-cream leading-tight mb-7">
            Fornelli, il borgo medievale sulla valle di Isernia
          </h2>
          <div className="space-y-5 text-cream/85 text-base lg:text-lg leading-relaxed">
            <p>
              La Vecchia Torre vive dentro la cinta muraria di Fornelli, uno dei borghi medievali meglio conservati
              dell'Alto Molise, con la sua torre che da secoli domina la valle.
            </p>
            <p>
              Dalla nostra terrazza lo sguardo si perde sulla valle di Isernia, tra tramonti che i nostri ospiti
              raccontano come indimenticabili. Il Molise esiste, ed è bellissimo.
            </p>
          </div>
          <p className="font-heading italic text-gold text-xl lg:text-2xl mt-8">
            Lasciati guidare dai sapori del Molise.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
