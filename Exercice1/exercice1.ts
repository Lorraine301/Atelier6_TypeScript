// Fichier TypeScript pour l'exercice 1
class Point {
    //Définition de la classe Point avec un constructeur et ces deux paramètres
    constructor(private abs: number, private ord: number) {}
  
    //getters pour l'attribut abs
    getAbs(): number {
      return this.abs;
    }
   //setters pour l'attribut abs
    setAbs(abs: number): void {
      this.abs = abs;
    }
  
    //getters pour l'attribut ord
    getOrd(): number {
      return this.ord;
    }
     //setters pour l'attribut ord
    setOrd(ord: number): void {
      this.ord = ord;
    }
  
    /*Méthode calculerDistance calculerDistance(p: Point) qui permet de calculer la distance entre le point de
    l’objet courant (this) et l’objet Point p passé en paramètre.
    On va utiliser  la fonction Math.sqrt(a) pour calculer la racine carrée de a et Math.pow(x, y) pour calculer
    x y*/
    calculerDistance(p: Point): number {
      return Math.sqrt(Math.pow(this.abs - p.abs, 2) + Math.pow(this.ord - p.ord, 2));
    }
  }
  
  // Pour tester
  const p1 = new Point(0, 0);
  const p2 = new Point(3, 4);
  console.log("Distance entre p1 et p2 :", p1.calculerDistance(p2));
  