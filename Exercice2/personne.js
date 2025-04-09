"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    //constructeur 
    constructor(nom, sexe, adresses) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    // Getters
    getNom() {
        return this.nom;
    }
    getSexe() {
        return this.sexe;
    }
    getAdresses() {
        return this.adresses;
    }
    // Setters
    setNom(nom) {
        this.nom = nom;
    }
    setSexe(sexe) {
        this.sexe = sexe;
    }
    setAdresses(adresses) {
        this.adresses = adresses;
    }
    //Pour afficher les informations correctement
    toString() {
        const adressesStr = this.adresses.map(a => a.toString()).join(" | ");
        return `Nom: ${this.nom}, Sexe: ${this.sexe}, Adresses: [${adressesStr}]`;
    }
}
exports.Personne = Personne;
