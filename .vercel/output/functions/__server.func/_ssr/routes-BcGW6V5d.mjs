import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Factory, d as Check, l as Droplets, n as X, o as Menu, r as Wheat, s as Flame, t as Zap, u as Cog } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BcGW6V5d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ticker = [
	"Ingénierie",
	"Génie civil industriel",
	"Tuyauterie",
	"Arrêts d'unité",
	"Maintenance",
	"Pompes",
	"Robinetterie",
	"Moteurs",
	"Instrumentation",
	"Pièces de rechange"
];
var services = [
	{
		id: "ingenierie",
		index: "01",
		title: "Ingénierie",
		lead: "Des dossiers qui servent au chantier, puis à l'exploitant. Pas des classeurs qui s'arrêtent à la signature.",
		image: "/photos/etudes.jpg",
		imageAlt: "Ingénieure et ingénieur en revue de plans devant un rack de tuyauterie",
		points: [
			"Avant-projet, implantation et notes de calcul",
			"Plans d'exécution, isométriques, nomenclatures",
			"Supervision et assistance à la réception"
		],
		delivers: "Un dossier d'exécution et un DOE lisibles après le montage."
	},
	{
		id: "construction",
		index: "02",
		title: "Construction",
		lead: "Montage et génie civil industriel sur des sites qui restent en exploitation, ou sur des unités neuves.",
		image: "/photos/chantier.jpg",
		imageAlt: "Charpente métallique industrielle en cours de montage dans un paysage sec",
		points: [
			"Charpente, supports, massifs et voiries de site",
			"Montage de tuyauterie, skids et équipements",
			"Coordination HSE et planning de chantier"
		],
		delivers: "Une installation montée, contrôlée, prête à être raccordée."
	},
	{
		id: "maintenance",
		index: "03",
		title: "Maintenance",
		lead: "Interventions préparées : préventif, correctif, et arrêts où chaque heure compte.",
		image: "/photos/maintenance.jpg",
		imageAlt: "Technicien de maintenance contrôlant l'accouplement d'une pompe centrifuge",
		points: [
			"Gammes, pièces critiques et préparation d'arrêt",
			"Machines tournantes, robinetterie, électricité",
			"Contrats de moyens ou interventions ponctuelles"
		],
		delivers: "L'équipement remis en service, avec le retour écrit de l'intervention."
	},
	{
		id: "fourniture",
		index: "04",
		title: "Fourniture",
		lead: "Équipements et pièces pour le process, les utilities et le stock de sécurité. Du cahier des charges à la livraison.",
		image: "/photos/stock.jpg",
		imageAlt: "Magasin industriel de vannes, moteurs et pièces sur racks",
		points: [
			"Pompes, moteurs, robinetterie, instrumentation",
			"Équivalence de pièces et dossiers techniques",
			"Lots d'arrêt et réassort de magasin"
		],
		delivers: "Un matériel identifié, documenté, livrable sur site."
	}
];
var sectors = [
	{
		title: "Hydrocarbures",
		text: "Traitement, stockage, expédition et utilities des sites pétroliers et gaziers.",
		icon: "flame"
	},
	{
		title: "Énergie",
		text: "Centrales, postes, air comprimé, vapeur et réseaux électriques de site.",
		icon: "zap"
	},
	{
		title: "Mines et ciment",
		text: "Manutention, broyage, dépoussiérage et ateliers mécaniques.",
		icon: "factory"
	},
	{
		title: "Eau",
		text: "Pompage, traitement, relevage et réseaux des unités industrielles.",
		icon: "droplets"
	},
	{
		title: "Agro-industrie",
		text: "Process alimentaire, froid, vapeur et lignes de conditionnement.",
		icon: "wheat"
	},
	{
		title: "Industries de transformation",
		text: "Chimie, sidérurgie légère, ateliers et zones industrielles.",
		icon: "cog"
	}
];
var poles = [
	"Alger",
	"Arzew — Oran",
	"Skikda",
	"Béjaïa",
	"Annaba",
	"Hassi Messaoud",
	"Hassi R'Mel",
	"Ouargla"
];
var steps = [
	{
		index: "01",
		title: "Cadrage",
		text: "Site, contrainte d'exploitation, délai et ce qui est déjà décidé. On ne chiffre pas dans le vide."
	},
	{
		index: "02",
		title: "Dossier",
		text: "Périmètre, hypothèses, lots techniques et pièces. Vous validez avant l'engagement."
	},
	{
		index: "03",
		title: "Exécution",
		text: "Étude, chantier, arrêt ou livraison. Un interlocuteur suit le lot jusqu'au bout."
	},
	{
		index: "04",
		title: "Remise",
		text: "DOE, gammes, certificats et pièces restantes. Le site peut reprendre sans nous relancer."
	}
];
var families = [
	"Pompes",
	"Robinetterie",
	"Machines tournantes",
	"Électricité",
	"Instrumentation",
	"Tuyauterie"
];
var equipment = [
	{
		id: "pompe-centrifuge",
		name: "Pompe centrifuge process",
		family: "Pompes",
		use: "Transfert, charge et circulation sur fluides industriels."
	},
	{
		id: "pompe-doseuse",
		name: "Pompe doseuse",
		family: "Pompes",
		use: "Injection de réactifs, traitement d'eau et additifs."
	},
	{
		id: "motopompe",
		name: "Groupe motopompe de secours",
		family: "Pompes",
		use: "Relevage et secours incendie ou utilities."
	},
	{
		id: "vanne-opercule",
		name: "Vanne à opercule",
		family: "Robinetterie",
		use: "Sectionnement sur lignes de process et d'utilités."
	},
	{
		id: "vanne-papillon",
		name: "Vanne papillon",
		family: "Robinetterie",
		use: "Réseaux eau, air et gros diamètres."
	},
	{
		id: "soupape",
		name: "Soupape de sûreté",
		family: "Robinetterie",
		use: "Protection des capacités et des lignes sous pression."
	},
	{
		id: "garniture",
		name: "Garniture mécanique",
		family: "Machines tournantes",
		use: "Étanchéité d'arbre sur pompes en service."
	},
	{
		id: "accouplement",
		name: "Accouplement et alignement",
		family: "Machines tournantes",
		use: "Liaison moteur–machine et reprise après démontage."
	},
	{
		id: "reducteur",
		name: "Motoréducteur",
		family: "Machines tournantes",
		use: "Manutention, agitateurs et convoyeurs."
	},
	{
		id: "moteur",
		name: "Moteur asynchrone BT",
		family: "Électricité",
		use: "Entraînement des machines de site, du kW à la centaine de kW."
	},
	{
		id: "demarreur",
		name: "Démarreur progressif",
		family: "Électricité",
		use: "Démarrage des charges à forte inertie, pompes et ventilateurs."
	},
	{
		id: "variateur",
		name: "Variateur de vitesse",
		family: "Électricité",
		use: "Régulation de débit et d'effort sans vanne de by-pass."
	},
	{
		id: "transmetteur",
		name: "Transmetteur de pression",
		family: "Instrumentation",
		use: "Mesure process, seuils et protection de ligne."
	},
	{
		id: "debitmetre",
		name: "Débitmètre",
		family: "Instrumentation",
		use: "Comptage et régulation sur liquides et gaz de site."
	},
	{
		id: "brides",
		name: "Brides, joints et boulonnerie",
		family: "Tuyauterie",
		use: "Lots de montage et de remplacement à l'arrêt."
	},
	{
		id: "echangeur",
		name: "Échangeur tubulaire",
		family: "Tuyauterie",
		use: "Réchauffage, refroidissement et récupération sur utilities."
	}
];
var sites = [
	"Alger",
	"Oran / Arzew",
	"Skikda",
	"Béjaïa",
	"Annaba",
	"Hassi Messaoud",
	"Hassi R'Mel",
	"Ouargla",
	"Sétif",
	"Constantine",
	"Autre site"
];
var needs = [
	"Ingénierie",
	"Construction / montage",
	"Maintenance",
	"Fourniture d'équipements",
	"Plusieurs métiers"
];
var urgencies = [
	"Étude ou projet",
	"Fourniture planifiée",
	"Arrêt programmé",
	"Besoin urgent"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "societe",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-brass",
						children: "Société"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl",
						children: "Un interlocuteur, du plan jusqu'au magasin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-mist",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DzInduServ travaille pour les exploitants, les ensembliers et les sous-traitants qui ont besoin de passer d'un besoin de site à un dossier, puis à une intervention ou une livraison." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Le travail se fait en français, sur les contraintes réelles du site : exploitation en cours, arrêt court, pièce à identifier, plan à tenir. Nous ne remplaçons pas l'exploitant. Nous préparons et réalisons le lot qu'il a cadré." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-sm uppercase tracking-widest text-mist",
						children: "Bassins d'intervention"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: poles.map((pole) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-line px-3 py-2 text-sm text-cream",
							children: pole
						}, pole))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "lg:col-span-7 lg:pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/etudes.jpg",
						alt: "Revue de plans sur le terrain, casques et combinaison de site",
						className: "aspect-video w-full object-cover",
						width: 1728,
						height: 1152
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-ink/90 px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Revue de plans, au pied du rack" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display tracking-widest text-brass",
							children: "Terrain"
						})]
					})]
				})
			})]
		})
	});
}
var useQuote = create()(persist((set, get) => ({
	lines: [],
	toggle: (line) => {
		set({ lines: get().lines.some((item) => item.id === line.id) ? get().lines.filter((item) => item.id !== line.id) : [...get().lines, line] });
	},
	remove: (id) => set({ lines: get().lines.filter((item) => item.id !== id) }),
	clear: () => set({ lines: [] })
}), {
	name: "dzinduserv-devis",
	skipHydration: true
}));
function Catalog() {
	const [family, setFamily] = (0, import_react.useState)("Toutes");
	const [query, setQuery] = (0, import_react.useState)("");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const lines = useQuote((state) => state.lines);
	const toggle = useQuote((state) => state.toggle);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const visible = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		return equipment.filter((item) => {
			const inFamily = family === "Toutes" || item.family === family;
			const inText = needle.length === 0 || item.name.toLowerCase().includes(needle) || item.use.toLowerCase().includes(needle) || item.family.toLowerCase().includes(needle);
			return inFamily && inText;
		});
	}, [family, query]);
	const selected = mounted ? new Set(lines.map((line) => line.id)) : /* @__PURE__ */ new Set();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "equipements",
		className: "border-b border-line bg-panel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-12 lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm uppercase tracking-widest text-brass",
								children: "Équipements"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl",
								children: "Ce que le magasin doit pouvoir sortir."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-mist",
								children: "Familles courantes sur site. Ajoutez une ligne au dossier : elle suit dans la demande de devis, sans engagement."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Rechercher un équipement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mist" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Pompe, vanne, moteur…",
								className: "min-h-12 w-full border border-line bg-ink pr-4 pl-10 text-cream outline-none placeholder:text-mist"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex gap-2 overflow-x-auto pb-1",
					role: "tablist",
					"aria-label": "Familles",
					children: ["Toutes", ...families].map((item) => {
						const selectedFamily = item === family;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selectedFamily,
							onClick: () => setFamily(item),
							className: "min-h-11 shrink-0 border px-4 text-sm transition-colors " + (selectedFamily ? "border-brass bg-brass text-ink" : "border-line text-mist hover:border-brass hover:text-cream"),
							children: item
						}, item);
					})
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 border border-line bg-ink px-4 py-8 text-center text-mist",
					children: "Aucune ligne pour cette recherche. Élargissez la famille ou le mot-clé."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: visible.map((item) => {
						const on = selected.has(item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => toggle({
								id: item.id,
								name: item.name,
								family: item.family
							}),
							className: "flex min-h-28 w-full flex-col items-start gap-2 border p-4 text-left transition-colors " + (on ? "border-brass bg-ink" : "border-line bg-ink hover:border-brass"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex w-full items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs uppercase tracking-widest text-brass",
										children: item.family
									}), on ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs font-semibold text-brass",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "size-3.5",
											"aria-hidden": "true"
										}), "Au dossier"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-mist",
										children: "Ajouter"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-semibold uppercase leading-none text-cream",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-mist",
									children: item.use
								})
							]
						}) }, item.id);
					})
				})
			]
		})
	});
}
var empty = {
	name: "",
	company: "",
	phone: "",
	email: "",
	site: sites[0] ?? "Alger",
	need: needs[0] ?? "Ingénierie",
	urgency: urgencies[0] ?? "Étude ou projet",
	message: ""
};
var STORAGE_KEY = "dzinduserv-demandes";
function loadSaved() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function Contact() {
	const lines = useQuote((state) => state.lines);
	const remove = useQuote((state) => state.remove);
	const clear = useQuote((state) => state.clear);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [history, setHistory] = (0, import_react.useState)([]);
	const [latest, setLatest] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setHistory(loadSaved());
		setMounted(true);
	}, []);
	const selected = mounted ? lines : [];
	function update(key, value) {
		setFields((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
	}
	function validate(next) {
		const nextErrors = {};
		if (next.name.trim().length < 2) nextErrors.name = "Indiquez un nom.";
		if (next.company.trim().length < 2) nextErrors.company = "Indiquez la société.";
		if (next.phone.replace(/\D/g, "").length < 9) nextErrors.phone = "Numéro incomplet.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) nextErrors.email = "Adresse e-mail invalide.";
		return nextErrors;
	}
	function onSubmit(event) {
		event.preventDefault();
		const nextErrors = validate(fields);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		const saved = {
			...fields,
			name: fields.name.trim(),
			company: fields.company.trim(),
			phone: fields.phone.trim(),
			email: fields.email.trim(),
			message: fields.message.trim(),
			ref: `DZS-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(1e3 + Math.random() * 9e3)}`,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			lines: selected.map((line) => `${line.family} — ${line.name}`)
		};
		const nextHistory = [saved, ...history].slice(0, 8);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory));
		setHistory(nextHistory);
		setLatest(saved);
		setFields(empty);
		clear();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-b border-line bg-panel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-brass",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl",
						children: "Décrivez le lot. On cadre ensuite."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-mist",
						children: "La demande reste sur cet appareil. Elle prépare l'échange : métier, site, urgence, et les équipements déjà repérés."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 space-y-4 border-t border-line pt-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-mist",
								children: "Siège"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-cream",
								children: "Alger, Algérie"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-mist",
								children: "Courrier"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-cream underline decoration-line underline-offset-4 hover:decoration-brass",
								href: "mailto:contact@dzinduserv.dz",
								children: "contact@dzinduserv.dz"
							}) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-mist",
								children: "Langue de travail"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-cream",
								children: "Français, dossiers techniques de site"
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-8",
				children: [latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-brass bg-ink p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm uppercase tracking-widest text-brass",
							children: "Dossier enregistré"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-4xl font-semibold uppercase text-cream",
							children: latest.ref
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-mist",
							children: [
								latest.company,
								" — ",
								latest.need,
								", ",
								latest.site,
								".",
								" ",
								latest.lines.length > 0 ? `${latest.lines.length} ligne${latest.lines.length > 1 ? "s" : ""} matériel.` : "Sans ligne matériel.",
								" ",
								"Conservez la référence pour le suivi."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-6 inline-flex min-h-11 items-center bg-brass px-4 text-sm font-semibold text-ink hover:bg-brass-deep",
							onClick: () => setLatest(null),
							children: "Nouvelle demande"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "border border-line bg-ink p-5 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nom",
									value: fields.name,
									error: errors.name,
									autoComplete: "name",
									onChange: (value) => update("name", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Société",
									value: fields.company,
									error: errors.company,
									autoComplete: "organization",
									onChange: (value) => update("company", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Téléphone",
									value: fields.phone,
									error: errors.phone,
									autoComplete: "tel",
									inputMode: "tel",
									placeholder: "05XX XX XX XX",
									onChange: (value) => update("phone", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "E-mail",
									value: fields.email,
									error: errors.email,
									autoComplete: "email",
									inputMode: "email",
									onChange: (value) => update("email", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									label: "Site",
									value: fields.site,
									options: sites,
									onChange: (value) => update("site", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									label: "Métier",
									value: fields.need,
									options: needs,
									onChange: (value) => update("need", value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
										label: "Échéance",
										value: fields.urgency,
										options: urgencies,
										onChange: (value) => update("urgency", value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-mist",
										children: "Précisions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: fields.message,
										onChange: (event) => update("message", event.target.value),
										rows: 4,
										placeholder: "Unité, équipement, fenêtre d'arrêt, contrainte d'accès…",
										className: "mt-1.5 min-h-28 w-full border border-line bg-panel px-3 py-3 text-cream outline-none placeholder:text-mist"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border-t border-line pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-mist",
								children: "Lignes matériel jointes"
							}), selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-cream",
								children: [
									"Aucune. Vous pouvez",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#equipements",
										className: "text-brass underline underline-offset-4",
										children: "en ajouter dans le catalogue"
									}),
									"."
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 flex flex-wrap gap-2",
								children: selected.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => remove(line.id),
									className: "inline-flex min-h-10 items-center gap-2 border border-line px-3 text-sm text-cream hover:border-brass",
									children: [
										line.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
											className: "size-3.5 text-mist",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "sr-only",
											children: ["Retirer ", line.name]
										})
									]
								}) }, line.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brass px-5 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep sm:w-auto",
							children: "Enregistrer le dossier"
						})
					]
				}), history.length > 0 && !latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 border border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-mist",
						children: "Dossiers sur cet appareil"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-line",
						children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg text-cream",
								children: item.ref
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-mist",
								children: [
									item.company,
									" · ",
									item.need
								]
							})]
						}, item.ref))
					})]
				}) : null]
			})]
		})
	});
}
function Field({ label, value, error, onChange, autoComplete, inputMode, placeholder }) {
	const id = label.toLowerCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		htmlFor: id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-mist",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				value,
				autoComplete,
				inputMode,
				placeholder,
				"aria-invalid": error ? true : void 0,
				"aria-describedby": error ? `${id}-error` : void 0,
				onChange: (event) => onChange(event.target.value),
				className: "mt-1.5 min-h-12 w-full border bg-panel px-3 text-cream outline-none placeholder:text-mist " + (error ? "border-brass" : "border-line")
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: `${id}-error`,
				className: "mt-1 block text-sm text-brass",
				children: error
			}) : null
		]
	});
}
function Select({ label, value, options, onChange }) {
	const id = `select-${label.toLowerCase()}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		htmlFor: id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-mist",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			value,
			onChange: (event) => onChange(event.target.value),
			className: "mt-1.5 min-h-12 w-full border border-line bg-panel px-3 text-cream outline-none",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option,
				children: option
			}, option))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-semibold uppercase text-cream",
				children: "DzInduServ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-mist",
				children: "Ingénierie, construction, maintenance et fourniture d'équipements pour l'industrie en Algérie."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-mist",
				children: ["Alger · © ", (/* @__PURE__ */ new Date()).getFullYear()]
			})]
		})
	});
}
var links = [
	{
		href: "#metiers",
		label: "Métiers"
	},
	{
		href: "#secteurs",
		label: "Secteurs"
	},
	{
		href: "#equipements",
		label: "Équipements"
	},
	{
		href: "#methode",
		label: "Méthode"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const count = useQuote((state) => state.lines.length);
	(0, import_react.useEffect)(() => {
		useQuote.persist.rehydrate();
		setMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const badge = mounted ? count : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#accueil",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center border border-brass font-display text-lg font-semibold leading-none text-brass",
						children: "DZ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl font-semibold tracking-wide text-cream",
							children: "DzInduServ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-mist",
							children: "Industrie · Algérie"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					"aria-label": "Sections",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-mist transition-colors hover:text-cream",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "hidden min-h-11 items-center gap-2 bg-brass px-4 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep sm:inline-flex",
						children: ["Dossier de devis", badge > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-5 place-items-center bg-ink font-display text-xs text-brass",
							children: badge
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "grid size-11 place-items-center border border-line text-cream lg:hidden",
						"aria-expanded": open,
						"aria-controls": "menu-mobile",
						onClick: () => setOpen((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Fermer le menu" : "Ouvrir le menu"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "menu-mobile",
			className: "border-t border-line bg-ink px-5 py-4 lg:hidden",
			"aria-label": "Sections",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex min-h-11 items-center border-b border-line font-display text-2xl text-cream",
					onClick: () => setOpen(false),
					children: link.label
				}) }, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "mt-4 flex min-h-11 items-center justify-center bg-brass font-semibold text-ink",
					onClick: () => setOpen(false),
					children: ["Dossier de devis", badge > 0 ? ` (${badge})` : ""]
				}) })]
			})
		}) : null]
	});
}
function Hero() {
	const loop = [...ticker, ...ticker];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "accueil",
		className: "border-b border-line pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-10 px-5 py-10 md:px-8 lg:px-12 lg:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-medium uppercase tracking-widest text-brass",
						children: "Ingénierie · Construction · Maintenance · Fourniture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-5xl font-semibold uppercase leading-none text-cream sm:text-6xl lg:text-7xl",
								children: "De l'étude à la pièce de rechange."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-lg text-mist",
								children: "DzInduServ réunit quatre métiers pour les sites industriels en Algérie : les études, le montage, la maintenance et le matériel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex min-h-12 items-center justify-center bg-brass px-5 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep",
									children: "Constituer un dossier"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#metiers",
									className: "inline-flex min-h-12 items-center justify-center border border-line px-5 text-sm font-semibold text-cream transition-colors hover:border-brass hover:text-brass",
									children: "Voir les métiers"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid grid-cols-2 gap-px border border-line bg-line sm:max-w-lg",
						children: [
							["01", "Études et supervision"],
							["02", "Montage sur site"],
							["03", "Arrêts et maintenance"],
							["04", "Équipements et pièces"]
						].map(([index, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-ink px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-sm text-brass",
								children: index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm text-cream",
								children: label
							})]
						}, index))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-72 lg:min-h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/hero.jpg",
					alt: "Unité de traitement en bord de désert, en fin de journée",
					className: "absolute inset-0 h-full w-full object-cover",
					width: 1792,
					height: 1008
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-t border-line bg-panel",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker-track flex w-max",
				children: loop.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-8 px-4 py-3 font-display text-sm uppercase tracking-widest text-mist",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 bg-brass" })]
				}, `${item}-${index}`))
			})
		})]
	});
}
function Method() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "methode",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-brass",
					children: "Méthode"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl",
					children: "Rien ne part sans périmètre écrit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4",
					children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-panel p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-brass",
								children: step.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl font-semibold uppercase text-cream",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-mist",
								children: step.text
							})
						]
					}, step.index))
				})
			]
		})
	});
}
var icons = {
	flame: Flame,
	zap: Zap,
	factory: Factory,
	droplets: Droplets,
	wheat: Wheat,
	cog: Cog
};
function Sectors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "secteurs",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-brass",
					children: "Secteurs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl",
					children: "Là où le process ne s'improvise pas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3",
					children: sectors.map((sector) => {
						const Icon = icons[sector.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "bg-ink p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 text-brass",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-semibold uppercase text-cream",
									children: sector.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-mist",
									children: sector.text
								})
							]
						}, sector.title);
					})
				})
			]
		})
	});
}
function Services() {
	const [active, setActive] = (0, import_react.useState)("ingenierie");
	const current = services.find((service) => service.id === active) ?? services[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "metiers",
		className: "border-b border-line bg-panel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-brass",
					children: "Métiers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl",
					children: "Quatre activités, le même niveau d'exigence."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-mist",
					children: "Choisissez un métier. Le détail tient en une page : ce que nous faisons, et ce que vous récupérez."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2 lg:col-span-4",
					role: "tablist",
					"aria-label": "Métiers",
					children: services.map((service) => {
						const selected = service.id === current.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							onClick: () => setActive(service.id),
							className: "flex min-h-16 items-center gap-4 border px-4 text-left transition-colors " + (selected ? "border-brass bg-ink text-cream" : "border-line bg-panel-2 text-mist hover:border-brass hover:text-cream"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl text-brass",
								children: service.index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-semibold uppercase",
								children: service.title
							})]
						}, service.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-ink lg:col-span-8",
					role: "tabpanel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.image,
						alt: current.imageAlt,
						className: "aspect-video w-full object-cover",
						width: 1728,
						height: 1152
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 p-5 sm:p-8 md:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl font-semibold uppercase text-cream",
									children: current.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-mist",
									children: current.lead
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 md:col-span-2",
								children: current.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l-2 border-brass pl-3 text-sm text-cream",
									children: point
								}, point))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "border-t border-line pt-4 text-sm text-mist md:col-span-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-cream",
									children: "Remise. "
								}), current.delivers]
							})
						]
					})]
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenu",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:bg-brass focus:px-3 focus:py-2 focus:text-ink",
				children: "Aller au contenu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "contenu",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sectors, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
