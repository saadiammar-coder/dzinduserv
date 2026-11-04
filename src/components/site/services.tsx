import { useState } from "react";
import { services } from "@/data/site";

export function Services() {
  const [active, setActive] = useState<(typeof services)[number]["id"]>("ingenierie");
  const current = services.find((service) => service.id === active) ?? services[0];

  return (
    <section id="metiers" className="border-b border-line bg-panel">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-brass">Métiers</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl">
              Quatre activités, le même niveau d'exigence.
            </h2>
          </div>
          <p className="max-w-sm text-mist">
            Choisissez un métier. Le détail tient en une page : ce que nous faisons,
            et ce que vous récupérez.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-4" role="tablist" aria-label="Métiers">
            {services.map((service) => {
              const selected = service.id === current.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(service.id)}
                  className={
                    "flex min-h-16 items-center gap-4 border px-4 text-left transition-colors " +
                    (selected
                      ? "border-brass bg-ink text-cream"
                      : "border-line bg-panel-2 text-mist hover:border-brass hover:text-cream")
                  }
                >
                  <span className="font-display text-xl text-brass">{service.index}</span>
                  <span className="font-display text-2xl font-semibold uppercase">{service.title}</span>
                </button>
              );
            })}
          </div>

          <article className="border border-line bg-ink lg:col-span-8" role="tabpanel">
            <img
              src={current.image}
              alt={current.imageAlt}
              className="aspect-video w-full object-cover"
              width={1728}
              height={1152}
            />
            <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h3 className="font-display text-3xl font-semibold uppercase text-cream">
                  {current.title}
                </h3>
                <p className="mt-3 text-mist">{current.lead}</p>
              </div>
              <ul className="space-y-3 md:col-span-2">
                {current.points.map((point) => (
                  <li key={point} className="border-l-2 border-brass pl-3 text-sm text-cream">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="border-t border-line pt-4 text-sm text-mist md:col-span-5">
                <span className="font-semibold text-cream">Remise. </span>
                {current.delivers}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
