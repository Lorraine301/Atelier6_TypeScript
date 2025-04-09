// Après la conversion, on a le fichier JavaScript qui crée une fonction constructeur et des variables
var Point = /** @class */ (function () {
    //Définition de la classe Point avec un constructeur et ces deux paramètres
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    //getters pour l'attribut abs
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    //setters pour l'attribut abs
    Point.prototype.setAbs = function (abs) {
        this.abs = abs;
    };
    //getters pour l'attribut ord
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    //setters pour l'attribut ord
    Point.prototype.setOrd = function (ord) {
        this.ord = ord;
    };
    /*Méthode calculerDistance calculerDistance(p: Point) qui permet de calculer la distance entre le point de
    l’objet courant (this) et l’objet Point p passé en paramètre.
    On va utiliser  la fonction Math.sqrt(a) pour calculer la racine carrée de a et Math.pow(x, y) pour calculer
    x y*/
    Point.prototype.calculerDistance = function (p) {
        return Math.sqrt(Math.pow(this.abs - p.abs, 2) + Math.pow(this.ord - p.ord, 2));
    };
    return Point;
}());
// Pour tester
var p1 = new Point(0, 0);
var p2 = new Point(3, 4);
console.log("Distance entre p1 et p2 :", p1.calculerDistance(p2));
