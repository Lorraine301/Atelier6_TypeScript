import { Adresse } from "./adresse";//importation de la classe Adresse pour pouvoir l'utiliser

export class Personne {
//constructeur 
  constructor(
    private nom: string,
    private sexe: string,
    private adresses: Adresse[]
  ) {}

  // Getters
  getNom(): string {
    return this.nom;
  }

  getSexe(): string {
    return this.sexe;
  }

  getAdresses(): Adresse[] {
    return this.adresses;
  }

  // Setters
  setNom(nom: string): void {
    this.nom = nom;
  }

  setSexe(sexe: string): void {
    this.sexe = sexe;
  }

  setAdresses(adresses: Adresse[]): void {
    this.adresses = adresses;
  }

  //Pour afficher les informations correctement
 toString(): string {
    const adressesStr = this.adresses.map(a => a.toString()).join(" | ");
    return `Nom: ${this.nom}, Sexe: ${this.sexe}, Adresses: [${adressesStr}]`;
  }
  
}
