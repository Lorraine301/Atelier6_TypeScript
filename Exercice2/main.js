"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const adresse_1 = require("./adresse");
const personne_1 = require("./personne");
const liste_personne_1 = require("./liste_personne");
// Création de quelques adresses
const adresse1 = new adresse_1.Adresse("Iberia", "Tanger", "90000");
const adresse2 = new adresse_1.Adresse("Médina", "Rabat", "10000");
const adresse3 = new adresse_1.Adresse("Centre Ville", "Casablanca", "20000");
// Création de quelques personnes avec leurs adresses
const personne1 = new personne_1.Personne("Lorraine", "F", [adresse1]);
const personne2 = new personne_1.Personne("Andriamasy", "M", [adresse2]);
const personne3 = new personne_1.Personne("Agnès", "F", [adresse1, adresse3]);
// Création de la liste des personnes
const liste = new liste_personne_1.ListePersonnes([personne1, personne2, personne3]);
// --- TEST DES MÉTHODES ---
// Recherche par nom
console.log("Recherche par nom (Lorraine) :", (_a = liste.findByNom("Lorraine")) === null || _a === void 0 ? void 0 : _a.toString());
// Recherche par code postal
console.log("Code postal 90000  trouvé ? :", liste.findByCodePostal("90000"));
console.log("Code postal 30000 trouvé ? :", liste.findByCodePostal("30000"));
// Nombre de personnes vivant à Paris
console.log("Nombre de personnes à Tanger:", liste.countPersonneVille("Tanger"));
console.log("Nombre de personnes à Rabat :", liste.countPersonneVille("Rabat"));
