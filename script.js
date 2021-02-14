// Gameboard stored inside an Module
const Game = (() => {
	//private functions and properties

	//Board stored as an array
	const board = ["", "", "", "", "", "", "", "", ""];

	//function to append array elements into html div
	const printBoard = function () {
		const boardContainer = document.getElementById("game-board");

		const appendChildren = (item) => {
			newSquare = document.createElement("div");
			newSquare.textContent = item;
			newSquare.classList.add("move");
			//newSquare.addEventListener("click", placeMarker());
			boardContainer.appendChild(newSquare);
		};
		board.forEach(appendChildren);
	};

	//return public
	return {
		printBoard,
		board,
	};
})();

//factory function to create players
const playerFactory = (name, marker) => {
	const sayHello = () => console.log("hello!");
	return { name, marker, sayHello };
};

// module to control the game
const gameController = (() => {
	//create 2 players from the player factory
	const player1 = playerFactory("uno", "X");
	const player2 = playerFactory("dos", "O");

	// game starts with player 1
	let activePlayer = player1;

	//function to add event listeners to all squares
	const addListener = () => {
		document.querySelectorAll(".move").forEach((item) => {
			item.addEventListener("click", takeTurn);
		});
	};

	//function to place marker in DOM and update Board array
	const placeMarker = () => {
		square = event.target;
		const index = Array.from(square.parentNode.children).indexOf(square);

		if (square.innerHTML == "") {
			square.innerHTML = activePlayer.marker;
			Game.board[index] = activePlayer.marker;
		} else {
			return;
		}
	};

	let gameOver = false;

	const takeTurn = () => {
		if (gameOver == false) {
			placeMarker();
			checkWinner();
			switchTurns();
		} else {
			return;
		}
	};

	const switchTurns = () => {
		if (activePlayer == player1) {
			activePlayer = player2;
		} else {
			activePlayer = player1;
		}
	};

	const checkWinner = () => {
		let board = Game.board;
		console.log(activePlayer.marker);
		if (
			//check horizontal
			(board[0] === activePlayer.marker &&
				board[1] === activePlayer.marker &&
				board[2] === activePlayer.marker) ||
			(board[3] === activePlayer.marker &&
				board[4] === activePlayer.marker &&
				board[5] === activePlayer.marker) ||
			(board[6] === activePlayer.marker &&
				board[7] === activePlayer.marker &&
				board[8] === activePlayer.marker) ||
			//check vertical
			(board[0] === activePlayer.marker &&
				board[3] === activePlayer.marker &&
				board[6] === activePlayer.marker) ||
			(board[1] === activePlayer.marker &&
				board[4] === activePlayer.marker &&
				board[7] === activePlayer.marker) ||
			(board[2] === activePlayer.marker &&
				board[5] === activePlayer.marker &&
				board[8] === activePlayer.marker) ||
			//check Diagonal
			(board[0] === activePlayer.marker &&
				board[4] === activePlayer.marker &&
				board[8] === activePlayer.marker) ||
			(board[2] === activePlayer.marker &&
				board[4] === activePlayer.marker &&
				board[6] === activePlayer.marker)
		) {
			celebrateWinner();
		} else if (!board.includes("")) {
			console.log("its a tie");
			gameOver = true;
		} else {
			return;
		}
	};

	const celebrateWinner = () => {
		gameOver = true;
		alert(activePlayer.name + " is the Winner");
	};

	const gamePlay = () => {
		//create the gameboard
		Game.printBoard();
		//add event listeners to board squares
		addListener();

		return;
	};

	gamePlay();
	//return public
	return {
		activePlayer,
		takeTurn,
		switchTurns,
		gamePlay,
		addListener,
	};
})();
