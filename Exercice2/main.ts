import { Adresse } from "./adresse";
import { Personne } from "./personne";
import { ListePersonnes } from "./liste_personne";

// Création de quelques adresses
const adresse1 = new Adresse("Iberia", "Tanger", "90000");
const adresse2 = new Adresse("Médina", "Rabat", "10000");
const adresse3 = new Adresse("Centre Ville", "Casablanca", "20000");

// Création de quelques personnes avec leurs adresses
const personne1 = new Personne("Lorraine", "F", [adresse1]);
const personne2 = new Personne("Andriamasy", "M", [adresse2]);
const personne3 = new Personne("Agnès", "F", [adresse1, adresse3]);

// Création de la liste des personnes
const liste = new ListePersonnes([personne1, personne2, personne3]);

// --- TEST DES MÉTHODES ---

// Recherche par nom
console.log("Recherche par nom (Lorraine) :", liste.findByNom("Lorraine")?.toString());

// Recherche par code postal
console.log("Code postal 90000  trouvé ? :", liste.findByCodePostal("90000"));
console.log("Code postal 30000 trouvé ? :", liste.findByCodePostal("30000"));

// Nombre de personnes vivant à Paris
console.log("Nombre de personnes à Tanger:", liste.countPersonneVille("Tanger"));
console.log("Nombre de personnes à Rabat :", liste.countPersonneVille("Rabat"));
