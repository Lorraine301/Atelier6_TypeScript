"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
class ListePersonnes {
    //constructeur
    constructor(personnes) {
        this.personnes = personnes;
    }
    // Getter
    getPersonnes() {
        return this.personnes;
    }
    // Setter
    setPersonnes(personnes) {
        this.personnes = personnes;
    }
    // Méthode rechercher par nom
    findByNom(s) {
        return this.personnes.find(p => p.getNom() === s) || null;
    }
    // Méthode vérifier si une personne a une adresse avec ce code postal
    findByCodePostal(cp) {
        return this.personnes.some(p => p.getAdresses().some(a => a.getCodePostal() === cp));
    }
    // Méthode compter les personnes vivant dans une ville
    countPersonneVille(ville) {
        return this.personnes.filter(p => p.getAdresses().some(a => a.getVille() === ville)).length;
    }
}
exports.ListePersonnes = ListePersonnes;
