import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { needs, sites, urgencies } from "@/data/site";
import { useQuote } from "@/lib/quote-store";

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  site: string;
  need: string;
  urgency: string;
  message: string;
};

type Saved = Fields & {
  ref: string;
  at: string;
  lines: string[];
};

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  site: sites[0] ?? "Alger",
  need: needs[0] ?? "Ingénierie",
  urgency: urgencies[0] ?? "Étude ou projet",
  message: "",
};

const STORAGE_KEY = "dzinduserv-demandes";

function loadSaved(): Saved[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Saved[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function Contact() {
  const lines = useQuote((state) => state.lines);
  const remove = useQuote((state) => state.remove);
  const clear = useQuote((state) => state.clear);
  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [history, setHistory] = useState<Saved[]>([]);
  const [latest, setLatest] = useState<Saved | null>(null);

  useEffect(() => {
    setHistory(loadSaved());
    setMounted(true);
  }, []);

  const selected = mounted ? lines : [];

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(next: Fields) {
    const nextErrors: Partial<Record<keyof Fields, string>> = {};
    if (next.name.trim().length < 2) nextErrors.name = "Indiquez un nom.";
    if (next.company.trim().length < 2) nextErrors.company = "Indiquez la société.";
    const digits = next.phone.replace(/\D/g, "");
    if (digits.length < 9) nextErrors.phone = "Numéro incomplet.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Adresse e-mail invalide.";
    }
    return nextErrors;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const saved: Saved = {
      ...fields,
      name: fields.name.trim(),
      company: fields.company.trim(),
      phone: fields.phone.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
      ref: `DZS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      at: new Date().toISOString(),
      lines: selected.map((line) => `${line.family} — ${line.name}`),
    };
    const nextHistory = [saved, ...history].slice(0, 8);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory));
    setHistory(nextHistory);
    setLatest(saved);
    setFields(empty);
    clear();
  }

  return (
    <section id="contact" className="border-b border-line bg-panel">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <p className="font-display text-sm uppercase tracking-widest text-brass">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl">
            Décrivez le lot. On cadre ensuite.
          </h2>
          <p className="mt-4 text-mist">
            La demande reste sur cet appareil. Elle prépare l'échange : métier,
            site, urgence, et les équipements déjà repérés.
          </p>
          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-mist">Siège</dt>
              <dd className="text-cream">Alger, Algérie</dd>
            </div>
            <div>
              <dt className="text-mist">Courrier</dt>
              <dd>
                <a className="text-cream underline decoration-line underline-offset-4 hover:decoration-brass" href="mailto:contact@dzinduserv.dz">
                  contact@dzinduserv.dz
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-mist">Langue de travail</dt>
              <dd className="text-cream">Français, dossiers techniques de site</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-8">
          {latest ? (
            <div className="border border-brass bg-ink p-6 sm:p-8">
              <p className="font-display text-sm uppercase tracking-widest text-brass">
                Dossier enregistré
              </p>
              <h3 className="mt-2 font-display text-4xl font-semibold uppercase text-cream">
                {latest.ref}
              </h3>
              <p className="mt-3 text-mist">
                {latest.company} — {latest.need}, {latest.site}.{" "}
                {latest.lines.length > 0
                  ? `${latest.lines.length} ligne${latest.lines.length > 1 ? "s" : ""} matériel.`
                  : "Sans ligne matériel."}{" "}
                Conservez la référence pour le suivi.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex min-h-11 items-center bg-brass px-4 text-sm font-semibold text-ink hover:bg-brass-deep"
                onClick={() => setLatest(null)}
              >
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="border border-line bg-ink p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Nom"
                  value={fields.name}
                  error={errors.name}
                  autoComplete="name"
                  onChange={(value) => update("name", value)}
                />
                <Field
                  label="Société"
                  value={fields.company}
                  error={errors.company}
                  autoComplete="organization"
                  onChange={(value) => update("company", value)}
                />
                <Field
                  label="Téléphone"
                  value={fields.phone}
                  error={errors.phone}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="05XX XX XX XX"
                  onChange={(value) => update("phone", value)}
                />
                <Field
                  label="E-mail"
                  value={fields.email}
                  error={errors.email}
                  autoComplete="email"
                  inputMode="email"
                  onChange={(value) => update("email", value)}
                />
                <Select
                  label="Site"
                  value={fields.site}
                  options={sites}
                  onChange={(value) => update("site", value)}
                />
                <Select
                  label="Métier"
                  value={fields.need}
                  options={needs}
                  onChange={(value) => update("need", value)}
                />
                <div className="sm:col-span-2">
                  <Select
                    label="Échéance"
                    value={fields.urgency}
                    options={urgencies}
                    onChange={(value) => update("urgency", value)}
                  />
                </div>
                <label className="block sm:col-span-2">
                  <span className="text-sm text-mist">Précisions</span>
                  <textarea
                    value={fields.message}
                    onChange={(event) => update("message", event.target.value)}
                    rows={4}
                    placeholder="Unité, équipement, fenêtre d'arrêt, contrainte d'accès…"
                    className="mt-1.5 min-h-28 w-full border border-line bg-panel px-3 py-3 text-cream outline-none placeholder:text-mist"
                  />
                </label>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <p className="text-sm text-mist">Lignes matériel jointes</p>
                {selected.length === 0 ? (
                  <p className="mt-2 text-sm text-cream">
                    Aucune. Vous pouvez{" "}
                    <a href="#equipements" className="text-brass underline underline-offset-4">
                      en ajouter dans le catalogue
                    </a>
                    .
                  </p>
                ) : (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {selected.map((line) => (
                      <li key={line.id}>
                        <button
                          type="button"
                          onClick={() => remove(line.id)}
                          className="inline-flex min-h-10 items-center gap-2 border border-line px-3 text-sm text-cream hover:border-brass"
                        >
                          {line.name}
                          <X className="size-3.5 text-mist" aria-hidden="true" />
                          <span className="sr-only">Retirer {line.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brass px-5 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep sm:w-auto"
              >
                Enregistrer le dossier
              </button>
            </form>
          )}

          {history.length > 0 && !latest ? (
            <div className="mt-4 border border-line px-5 py-4">
              <p className="font-display text-sm uppercase tracking-widest text-mist">
                Dossiers sur cet appareil
              </p>
              <ul className="mt-3 divide-y divide-line">
                {history.map((item) => (
                  <li key={item.ref} className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm">
                    <span className="font-display text-lg text-cream">{item.ref}</span>
                    <span className="text-mist">
                      {item.company} · {item.need}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  autoComplete,
  inputMode,
  placeholder,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  inputMode?: "tel" | "email";
  placeholder?: string;
}) {
  const id = label.toLowerCase();
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm text-mist">{label}</span>
      <input
        id={id}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={
          "mt-1.5 min-h-12 w-full border bg-panel px-3 text-cream outline-none placeholder:text-mist " +
          (error ? "border-brass" : "border-line")
        }
      />
      {error ? (
        <span id={`${id}-error`} className="mt-1 block text-sm text-brass">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  const id = `select-${label.toLowerCase()}`;
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm text-mist">{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 min-h-12 w-full border border-line bg-panel px-3 text-cream outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
