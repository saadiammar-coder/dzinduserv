export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-3xl font-semibold uppercase text-cream">DzInduServ</p>
          <p className="mt-2 max-w-sm text-sm text-mist">
            Ingénierie, construction, maintenance et fourniture d'équipements
            pour l'industrie en Algérie.
          </p>
        </div>
        <p className="text-sm text-mist">Alger · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
