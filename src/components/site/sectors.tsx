import { Cog, Droplets, Factory, Flame, Wheat, Zap } from "lucide-react";
import { sectors } from "@/data/site";

const icons = {
  flame: Flame,
  zap: Zap,
  factory: Factory,
  droplets: Droplets,
  wheat: Wheat,
  cog: Cog,
};

export function Sectors() {
  return (
    <section id="secteurs" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <p className="font-display text-sm uppercase tracking-widest text-brass">Secteurs</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl">
          Là où le process ne s'improvise pas.
        </h2>
        <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = icons[sector.icon];
            return (
              <li key={sector.title} className="bg-ink p-6">
                <Icon className="size-5 text-brass" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-semibold uppercase text-cream">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm text-mist">{sector.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
