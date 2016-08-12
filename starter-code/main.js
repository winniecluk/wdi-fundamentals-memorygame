console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function(){
	for(var i=0; i<4; i++){
		var createElement = document.createElement('div');
		createElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		gameBoard.appendChild(createElement);
	}
};

var isTwoCards = function(){
	 cardsInPlay.push(this.getAttribute('data-card'));
	 console.log(this.getAttribute('data-card'));
	 if (this.getAttribute('data-card') === 'king') {
	   if this.innerHTML = "<img src='king.png'>";
		} else {
		this.innerHTML = "<img src='queen.png'>";
		}
 	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
	}
};

var isMatch = function(){
	if (cards[0] === cards[1]) {
  		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
};

createBoard();
isTwoCards();
isMatch();