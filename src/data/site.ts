export const ticker = [
  "Ingénierie",
  "Génie civil industriel",
  "Tuyauterie",
  "Arrêts d'unité",
  "Maintenance",
  "Pompes",
  "Robinetterie",
  "Moteurs",
  "Instrumentation",
  "Pièces de rechange",
];

export const services = [
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
      "Supervision et assistance à la réception",
    ],
    delivers: "Un dossier d'exécution et un DOE lisibles après le montage.",
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
      "Coordination HSE et planning de chantier",
    ],
    delivers: "Une installation montée, contrôlée, prête à être raccordée.",
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
      "Contrats de moyens ou interventions ponctuelles",
    ],
    delivers: "L'équipement remis en service, avec le retour écrit de l'intervention.",
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
      "Lots d'arrêt et réassort de magasin",
    ],
    delivers: "Un matériel identifié, documenté, livrable sur site.",
  },
] as const;

export const sectors = [
  {
    title: "Hydrocarbures",
    text: "Traitement, stockage, expédition et utilities des sites pétroliers et gaziers.",
    icon: "flame" as const,
  },
  {
    title: "Énergie",
    text: "Centrales, postes, air comprimé, vapeur et réseaux électriques de site.",
    icon: "zap" as const,
  },
  {
    title: "Mines et ciment",
    text: "Manutention, broyage, dépoussiérage et ateliers mécaniques.",
    icon: "factory" as const,
  },
  {
    title: "Eau",
    text: "Pompage, traitement, relevage et réseaux des unités industrielles.",
    icon: "droplets" as const,
  },
  {
    title: "Agro-industrie",
    text: "Process alimentaire, froid, vapeur et lignes de conditionnement.",
    icon: "wheat" as const,
  },
  {
    title: "Industries de transformation",
    text: "Chimie, sidérurgie légère, ateliers et zones industrielles.",
    icon: "cog" as const,
  },
];

export const poles = [
  "Alger",
  "Arzew — Oran",
  "Skikda",
  "Béjaïa",
  "Annaba",
  "Hassi Messaoud",
  "Hassi R'Mel",
  "Ouargla",
];

export const steps = [
  {
    index: "01",
    title: "Cadrage",
    text: "Site, contrainte d'exploitation, délai et ce qui est déjà décidé. On ne chiffre pas dans le vide.",
  },
  {
    index: "02",
    title: "Dossier",
    text: "Périmètre, hypothèses, lots techniques et pièces. Vous validez avant l'engagement.",
  },
  {
    index: "03",
    title: "Exécution",
    text: "Étude, chantier, arrêt ou livraison. Un interlocuteur suit le lot jusqu'au bout.",
  },
  {
    index: "04",
    title: "Remise",
    text: "DOE, gammes, certificats et pièces restantes. Le site peut reprendre sans nous relancer.",
  },
];

export type Family =
  | "Pompes"
  | "Robinetterie"
  | "Machines tournantes"
  | "Électricité"
  | "Instrumentation"
  | "Tuyauterie";

export const families: Family[] = [
  "Pompes",
  "Robinetterie",
  "Machines tournantes",
  "Électricité",
  "Instrumentation",
  "Tuyauterie",
];

export const equipment: { id: string; name: string; family: Family; use: string }[] = [
  {
    id: "pompe-centrifuge",
    name: "Pompe centrifuge process",
    family: "Pompes",
    use: "Transfert, charge et circulation sur fluides industriels.",
  },
  {
    id: "pompe-doseuse",
    name: "Pompe doseuse",
    family: "Pompes",
    use: "Injection de réactifs, traitement d'eau et additifs.",
  },
  {
    id: "motopompe",
    name: "Groupe motopompe de secours",
    family: "Pompes",
    use: "Relevage et secours incendie ou utilities.",
  },
  {
    id: "vanne-opercule",
    name: "Vanne à opercule",
    family: "Robinetterie",
    use: "Sectionnement sur lignes de process et d'utilités.",
  },
  {
    id: "vanne-papillon",
    name: "Vanne papillon",
    family: "Robinetterie",
    use: "Réseaux eau, air et gros diamètres.",
  },
  {
    id: "soupape",
    name: "Soupape de sûreté",
    family: "Robinetterie",
    use: "Protection des capacités et des lignes sous pression.",
  },
  {
    id: "garniture",
    name: "Garniture mécanique",
    family: "Machines tournantes",
    use: "Étanchéité d'arbre sur pompes en service.",
  },
  {
    id: "accouplement",
    name: "Accouplement et alignement",
    family: "Machines tournantes",
    use: "Liaison moteur–machine et reprise après démontage.",
  },
  {
    id: "reducteur",
    name: "Motoréducteur",
    family: "Machines tournantes",
    use: "Manutention, agitateurs et convoyeurs.",
  },
  {
    id: "moteur",
    name: "Moteur asynchrone BT",
    family: "Électricité",
    use: "Entraînement des machines de site, du kW à la centaine de kW.",
  },
  {
    id: "demarreur",
    name: "Démarreur progressif",
    family: "Électricité",
    use: "Démarrage des charges à forte inertie, pompes et ventilateurs.",
  },
  {
    id: "variateur",
    name: "Variateur de vitesse",
    family: "Électricité",
    use: "Régulation de débit et d'effort sans vanne de by-pass.",
  },
  {
    id: "transmetteur",
    name: "Transmetteur de pression",
    family: "Instrumentation",
    use: "Mesure process, seuils et protection de ligne.",
  },
  {
    id: "debitmetre",
    name: "Débitmètre",
    family: "Instrumentation",
    use: "Comptage et régulation sur liquides et gaz de site.",
  },
  {
    id: "brides",
    name: "Brides, joints et boulonnerie",
    family: "Tuyauterie",
    use: "Lots de montage et de remplacement à l'arrêt.",
  },
  {
    id: "echangeur",
    name: "Échangeur tubulaire",
    family: "Tuyauterie",
    use: "Réchauffage, refroidissement et récupération sur utilities.",
  },
];

export const sites = [
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
  "Autre site",
];

export const needs = [
  "Ingénierie",
  "Construction / montage",
  "Maintenance",
  "Fourniture d'équipements",
  "Plusieurs métiers",
];

export const urgencies = [
  "Étude ou projet",
  "Fourniture planifiée",
  "Arrêt programmé",
  "Besoin urgent",
];
