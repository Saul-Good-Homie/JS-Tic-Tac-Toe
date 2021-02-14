// Gameboard stored inside an Module
const Game = (() => {
	//private functions and properties

	//Board stored as an array
	let board = ["", "", "", "", "", "", "", "", ""];
	const boardContainer = document.getElementById("game-board");

	//remove existing child nodes
	const clearBoard = () => {
		while (boardContainer.firstChild) {
			boardContainer.removeChild(boardContainer.firstChild);
		}
		board = ["", "", "", "", "", "", "", "", ""];
		return;
	};

	//function to append array elements into html div
	const printBoard = function () {
		const appendChildren = (item) => {
			newSquare = document.createElement("div");
			newSquare.innerHTML = item;
			newSquare.classList.add("move");
			boardContainer.appendChild(newSquare);
		};
		board.forEach(appendChildren);
	};

	//return public
	return {
		printBoard,
		boardContainer,
		board,
		clearBoard,
	};
})();

const DOM = (() => {
	const xScore = document.getElementById("player-1-score");
	const oScore = document.getElementById("player-2-score");
	const messageBox = document.getElementById("message-box");
	const reset = document.getElementById("reset");

	//public
	return { xScore, oScore, messageBox, reset };
})();

//factory function to create players
const playerFactory = (name, marker) => {
	this.score = 0;
	const updateName = (newName) => {
		this.name = newName;
	};

	return { name, marker, score };
};

// module to control the game
const gameController = (() => {
	//create 2 players from the player factory
	const player1 = playerFactory("uno", "X");
	const player2 = playerFactory("dos", "O");

	// game starts with player 1
	let activePlayer = player1;
	let gameOver = false;

	//function to add event listeners to all squares
	const addListener = () => {
		document.querySelectorAll(".move").forEach((item) => {
			item.addEventListener("click", takeTurn);
		});

		DOM.reset.addEventListener("click", reset);
	};

	//function to place marker in DOM and update Board array
	const placeMarker = () => {
		square = event.target;
		const index = Array.from(square.parentNode.children).indexOf(square);

		if (square.innerHTML == "") {
			square.innerHTML = activePlayer.marker;
			Game.board[index] = activePlayer.marker;
			square.removeEventListener("click", takeTurn);
		} else {
			return;
		}
	};

	const reset = () => {
		Game.clearBoard();
		activePlayer = player1;
		gameOver = false;
		gamePlay();
	};

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
			DOM.messageBox.innerHTML = "It's a Tie";
			gameOver = true;
		} else {
			return;
		}
	};

	const celebrateWinner = () => {
		gameOver = true;
		DOM.messageBox.innerHTML = activePlayer.name + " wins this round!";
		activePlayer.score++;
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
