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
				square.innerHTML = "HEY";
				board[index] = "HEY";
			} else {
				return;
			}

			console.log(index);
			console.log(board);
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

Game.printBoard();
Game.placeMarker();
