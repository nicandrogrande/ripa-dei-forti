import { Reveal } from "./Reveal";
import { IMAGES } from "../../data/content";
import { Fish, Waves, Dog, FerrisWheel, Goal, Coffee } from "lucide-react";

const FEATURES = [
  { icon: Fish, label: "Laghetti per la pesca delle trote" },
  { icon: Waves, label: "Cascata e ruscelli con ponticelli" },
  { icon: Dog, label: "Animali da cortile" },
  { icon: FerrisWheel, label: "Parco giochi per bambini" },
  { icon: Goal, label: "Campetto da calcio" },
  { icon: Coffee, label: "Bar nel verde" },
];

export const Territory = () => {
  return (
    <section data-testid="territory" id="villaggio" className="relative py-28 lg:py-44 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${IMAGES.villaggio})` }}
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="max-w-2xl border border-cream/25 backdrop-blur-sm bg-dark/20 p-10 lg:p-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Il Villaggio</p>
          <h2 className="font-heading font-light text-4xl lg:text-5xl text-cream leading-tight mb-7">
            Un parco immenso nel verde del Molise
          </h2>
          <div className="space-y-5 text-cream/85 text-base lg:text-lg leading-relaxed">
            <p>
              Ripa dei Forti Village non è solo un ristorante: è un villaggio naturalistico con un parco immenso da
              scoprire tra laghetti, cascata, ruscelli e animali da cortile.
            </p>
            <p>
              Il punto forte? I nostri <strong className="text-gold font-normal">laghetti per la pesca delle trote</strong>,
              un'esperienza unica per grandi e piccoli, da vivere immersi nella natura prima o dopo il pranzo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
          {FEATURES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 border border-cream/25 backdrop-blur-sm bg-dark/20 p-4"
            >
              <Icon className="text-gold shrink-0" size={22} strokeWidth={1.5} />
              <p className="text-cream/90 text-sm leading-snug">{label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
