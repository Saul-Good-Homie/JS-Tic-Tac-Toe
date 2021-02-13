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

	//function to place marker in DOM and update Board array
	const placeMarker = () => {
		const message = () => {
			square = event.target;
			const index = Array.from(square.parentNode.children).indexOf(
				square
			);

			if (square.innerHTML == "") {
				square.innerHTML = gameController.activePlayer.marker;
				board[index] = gameController.activePlayer.marker;
			} else {
				return;
			}
			//console.log(index);
			//console.log(board);
		};

		document.querySelectorAll(".move").forEach((item) => {
			item.addEventListener("click", message);
		});
	};

	//return public
	return {
		printBoard,
		placeMarker,
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

	//create the gameboard and start game
	Game.printBoard();

	// game starts with player 1
	let activePlayer = player1;

	const switchTurns = () => {
		if (activePlayer == player1) {
			activePlayer = player2;
			//console.log("it is " + activePlayer.name + " turn");
		} else {
			activePlayer = player1;
			//console.log("it is " + activePlayer.name + " turn");
		}
	};

	const takeTurn = () => {
		//check winner

		//check active player
		console.log(activePlayer);
		//active player places marker
		Game.placeMarker();
		//switch active player

		//repeat 9 times
	};

	const gamePlay = () => {
		let n = 0;
		while (n < 10) {
			n++;
			takeTurn();
			switchTurns();
		}
	};

	//return public
	return {
		activePlayer,
		switchTurns,
		takeTurn,
		gamePlay,
	};
})();
