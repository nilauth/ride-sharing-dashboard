import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

// Importer les constantes de données
import { labels, marques, statuses } from "./data";

// Générer des données pour les conducteurs
const conducteurs = Array.from({ length: 100 }, () => ({
  CIN: `CD${faker.number.int({ min: 1000, max: 9999 })}`, // Changed from 'id'
  "Nom et Prénom": faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()), 
  status: faker.helpers.arrayElement(statuses).value, 
  label: faker.helpers.arrayElement(labels).value, 
  "Marque de la voiture": faker.helpers.arrayElement(marques).value,
}));

// Écrire les données des conducteurs dans un fichier JSON
fs.writeFileSync(path.join(__dirname, "conducteurs.json"), JSON.stringify(conducteurs, null, 2));

console.log("✅ Données des conducteurs générées.");
