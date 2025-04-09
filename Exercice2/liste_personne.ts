//Pour pouvoir utiliser les deux classes Personne et Adresse 
import { Personne } from "./personne";
import { Adresse } from "./adresse";

export class ListePersonnes {
    //constructeur
  constructor(private personnes: Personne[]) {}

  // Getter
  getPersonnes(): Personne[] {
    return this.personnes;
  }

  // Setter
  setPersonnes(personnes: Personne[]): void {
    this.personnes = personnes;
  }

  // Méthode rechercher par nom
  findByNom(s: string): Personne | null {
    return this.personnes.find(p => p.getNom() === s) || null;
  }

  // Méthode vérifier si une personne a une adresse avec ce code postal
  findByCodePostal(cp: string): boolean {
    return this.personnes.some(p =>
      p.getAdresses().some(a => a.getCodePostal() === cp)
    );
  }

  // Méthode compter les personnes vivant dans une ville
  countPersonneVille(ville: string): number {
    return this.personnes.filter(p =>
      p.getAdresses().some(a => a.getVille() === ville)
    ).length;
  }
}
