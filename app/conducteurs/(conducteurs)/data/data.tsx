import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, BadgeCheck, Clock, Ban } from "lucide-react";

export const labels = [
  {
    value: "dispo",
    label: "Disponible",
  },
  {
    value: "occupe",
    label: "Occupé",
  },
  {
    value: "hors_service",
    label: "Hors service",
  },
];

export const statuses = [
  {
    value: "Vérifié",
    label: "Vérifié",
    // icon: <BadgeCheck />,
  },
  {
    value: "En attente de vérification",
    label: "En attente de vérification",
    // icon: <Clock />,
  },
  {
    value: "Suspendu",
    label: "Suspendu",
    // icon: <Ban />,
  },
  {
    value: "Nouveau",
    label: "Nouveau",
    // icon: IconeNouveau,
  },
  {
    value: "Désactivé",
    label: "Désactivé",
    // icon: IconeDesactive,
  },
];

export const marques = [
  {
    label: "Ford",
    value: "Ford",
  },
  {
    label: "Toyota",
    value: "Toyota",
  },
  {
    label: "Peugeot",
    value: "Peugeot",
  },
  {
    label: "Volkswagen",
    value: "Volkswagen",
  },
];
