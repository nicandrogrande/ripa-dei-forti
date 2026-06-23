import { Reveal } from "./Reveal";
import { IMAGES } from "../../data/content";
import { Baby, Users, PartyPopper, TreePine } from "lucide-react";

const AUDIENCES = [
  { icon: Baby, title: "Famiglie con Bambini", desc: "Parco giochi, laghetto e animali per far divertire i più piccoli in sicurezza." },
  { icon: Users, title: "Gruppi", desc: "Spazi ampi e tavoli conviviali, perfetti per comitive e gite organizzate." },
  { icon: PartyPopper, title: "Compleanni e Feste", desc: "Il verde del parco come cornice naturale per occasioni speciali." },
  { icon: TreePine, title: "Gite Fuori Porta", desc: "Una giornata intera nella natura molisana, tra passeggiate e relax." },
];

export const IdealFor = () => {
  return (
    <section data-testid="ideal-for" id="ideale-per" className="bg-cream py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <img
              src={IMAGES.famiglie}
              alt="Famiglia nel parco di Ripa dei Forti Village"
              className="w-full h-[480px] object-cover"
            />
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Ideale Per</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-dark leading-tight mb-8">
              Una giornata di natura per ogni occasione
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {AUDIENCES.map(({ icon: Icon, title, desc }) => (
                <div key={title} data-testid={`ideal-for-${title}`} className="border border-olive/20 bg-cream-alt p-6">
                  <Icon className="text-sienna mb-3" size={28} strokeWidth={1.5} />
                  <p className="text-dark font-semibold mb-1">{title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
