
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {

	this.array = new Array();


};

function Forme (color, width) {
    this.color = color;
    this.initX = initX;
};

function Rectangle (initX, initY, largeur, hauteur, color, width) {
    Forme.call(color, width);
    this.initX = initX;
    this.initY = initY;
    this.largeur = largeur;
    this.hauteur = hauteur;
};
Rectangle.prototype = new Forme();


function Ligne (initX, initY, finalX, finalY, color, width) {
    Forme.call(color, width);
    this.initX = initX;
    this.initY = initY;
    this.finalX = finalX;
    this.finalY = finalY;
};
Ligne.prototype = new Forme();
