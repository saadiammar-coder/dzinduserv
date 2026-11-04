import { ticker } from "@/data/site";

export function Hero() {
  const loop = [...ticker, ...ticker];

  return (
    <section id="accueil" className="border-b border-line pt-16">
      <div className="grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 px-5 py-10 md:px-8 lg:px-12 lg:py-14">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-brass">
            Ingénierie · Construction · Maintenance · Fourniture
          </p>
          <div className="max-w-xl">
            <h1 className="font-display text-5xl font-semibold uppercase leading-none text-cream sm:text-6xl lg:text-7xl">
              De l'étude à la pièce de rechange.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-mist">
              DzInduServ réunit quatre métiers pour les sites industriels en Algérie :
              les études, le montage, la maintenance et le matériel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center bg-brass px-5 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep"
              >
                Constituer un dossier
              </a>
              <a
                href="#metiers"
                className="inline-flex min-h-12 items-center justify-center border border-line px-5 text-sm font-semibold text-cream transition-colors hover:border-brass hover:text-brass"
              >
                Voir les métiers
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:max-w-lg">
            {[
              ["01", "Études et supervision"],
              ["02", "Montage sur site"],
              ["03", "Arrêts et maintenance"],
              ["04", "Équipements et pièces"],
            ].map(([index, label]) => (
              <div key={index} className="bg-ink px-4 py-3">
                <dt className="font-display text-sm text-brass">{index}</dt>
                <dd className="text-sm text-cream">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-h-72 lg:min-h-full">
          <img
            src="/photos/hero.jpg"
            alt="Unité de traitement en bord de désert, en fin de journée"
            className="absolute inset-0 h-full w-full object-cover"
            width={1792}
            height={1008}
          />
        </div>
      </div>
      <div className="overflow-hidden border-t border-line bg-panel" aria-hidden="true">
        <div className="ticker-track flex w-max">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 px-4 py-3 font-display text-sm uppercase tracking-widest text-mist"
            >
              {item}
              <span className="size-1.5 bg-brass" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
