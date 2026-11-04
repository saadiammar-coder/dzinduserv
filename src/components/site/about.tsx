import { poles } from "@/data/site";

export function About() {
  return (
    <section id="societe" className="border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="font-display text-sm uppercase tracking-widest text-brass">Société</p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl">
            Un interlocuteur, du plan jusqu'au magasin.
          </h2>
          <div className="mt-6 space-y-4 text-mist">
            <p>
              DzInduServ travaille pour les exploitants, les ensembliers et les
              sous-traitants qui ont besoin de passer d'un besoin de site à un
              dossier, puis à une intervention ou une livraison.
            </p>
            <p>
              Le travail se fait en français, sur les contraintes réelles du site :
              exploitation en cours, arrêt court, pièce à identifier, plan à tenir.
              Nous ne remplaçons pas l'exploitant. Nous préparons et réalisons
              le lot qu'il a cadré.
            </p>
          </div>
          <p className="mt-8 font-display text-sm uppercase tracking-widest text-mist">
            Bassins d'intervention
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {poles.map((pole) => (
              <li key={pole} className="border border-line px-3 py-2 text-sm text-cream">
                {pole}
              </li>
            ))}
          </ul>
        </div>
        <figure className="lg:col-span-7 lg:pt-8">
          <div className="relative">
            <img
              src="/photos/etudes.jpg"
              alt="Revue de plans sur le terrain, casques et combinaison de site"
              className="aspect-video w-full object-cover"
              width={1728}
              height={1152}
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-ink/90 px-4 py-3 text-sm">
              <span>Revue de plans, au pied du rack</span>
              <span className="font-display tracking-widest text-brass">Terrain</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
