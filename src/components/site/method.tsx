import { steps } from "@/data/site";

export function Method() {
  return (
    <section id="methode" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <p className="font-display text-sm uppercase tracking-widest text-brass">Méthode</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl">
          Rien ne part sans périmètre écrit.
        </h2>
        <ol className="mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.index} className="bg-panel p-6">
              <p className="font-display text-sm text-brass">{step.index}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold uppercase text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
