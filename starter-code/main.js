console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function(){
	for(var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		gameBoard.appendChild(cardElement);
	}
};

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}
 	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
	}
};

var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
  window.location = window.location;
};

createBoard();
