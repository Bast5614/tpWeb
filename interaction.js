
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.initX = 0;
    this.initY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.isClicked = false;
	// Developper les 3 fonctions gérant les événements
    this.clic = function (evt) {
            this.isClicked = true;
    }.bind(this);

    this.deplace = function (evt) {
        if (this.isClicked) {
            var position = getMousePosition(canvas,evt);
            this.finalX = position.x;
            this.finalY = position.y;
            console.log(evt);
        }
    }.bind(this);

    this.deClic = function (evt) {
        this.isClicked = false;
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.clic, false);
    canvas.addEventListener('mousemove', this.deplace, false);
    canvas.addEventListener('mouseup', this.deClic, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



