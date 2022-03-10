
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
	this.shapeArray = new Map();
};

function Shape (initX, initY, thickness, color) {
    this.initX = initX;
    this.initY = initY;
    this.color = color;
    this.thickness = thickness;
};

function Rectangle (initX, initY, thickness, color, height, width) {
    Shape.call(this, initX, initY, thickness, color);
    this.height = height;
    this.width = width;
};

function Line (initX, initY, thickness, color, finalX, finalY) {
    Shape.call(this, initX, initY, thickness, color);
    this.finalX = finalX;
    this.finalY = finalY;
};