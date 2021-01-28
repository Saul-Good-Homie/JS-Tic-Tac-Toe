// Gameboard stored inside an Module
const Game = (() => {
	const board = ["", "", "", "", "", "", "", "", ""];
	//const add = (a, b) => a + b;

	return { board };
})();

// create player Factory function
const Player = (name, marker) => {
	this.name = name;
	this.marker = marker;
	const getName = () => name;
	const setName = (newName) => (name = newName);
	return { getName, setName };
};

// Game controller stored inside a module

const GameController = (() => {
	const playerOne = Player("player 1", "X");
  const playerTwo = Player("player 2", "O");
  
  //render the gameboard array intoa grid
  const gameBoard = document.getElementById("game-board")
  Game.board.forEach(square){
    
    gameBoard.appendChild
  }

	return { playerOne, playerTwo };
})();

// const gameboard = document.getElementById("game-board");
// const square = document.querySelectorAll(".move");

// //bind event listeners to grid squares
// const bindEvents = () => {
// 	square.forEach((square) => {
// 		square.addEventListener("click", makeMove());
// 	});
// };

// //render the board
// const render = () => {
// 	this.square.forEach((square) => {
// 		square.textContent = Game.board[square.id];
// 	});
// };

// let turnCount = 0;
// const activePlayer = () => {
// 	if (turncount % 2 == 0) {
// 		let active = playerOne;
// 	} else {
// 		active = playerTwo;
// 	}
// 	return active;
// };

// const makeMove = (e) => {
// 	//let square = e.target;
// 	console.log("hi");
// };

// bindEvents();

//     turnCount: 1,
//initialize the game on page load

//   init: function () {
//     this.cacheDom();
//     this.render();
//     this.cacheDom();
//     this.bindEvents();
//     const playerOne = Player("player 1", "X");
//     const playerTwo = Player("player 2", "O");
//   },
//     // cache the dom
//     cacheDom: function () {
//       this.gameboard = document.getElementById("game-board");
//       this.square = document.querySelectorAll(".move");
//     },
//     // bind events
//     bindEvents: function () {
//       this.square.forEach((square) =>
//         square.addEventListener("click", this.makeMove.bind(this))
//       );
//     },
//     // render
//     render: function () {
//       this.square.forEach((square) => {
//         square.textContent = this.board[square.id];
//       });
//     },
//     makeMove: function (e) {
//       let id = e.target.id;
//       let marker;
//       if (this.turnCount % 2 == 0) {
//         marker = "O";
//       } else {
//         marker = "X";
//       }
//       if (this.board[id] == "") this.board[id] = marker;
//       this.turnCount++;
//       this.render();
//       //this.checkWinner();
//     },
//     checkWinner: function () {},
//   };
