import { useState } from "react"
import { Square } from "./components/Square"

import { TURNOS } from "./constants"
import { checkWinner, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
	const [board, setBoard] = useState(() => {
    if(window.localStorage.getItem('board')){
      return JSON.parse(window.localStorage.getItem('board'))
    }
    return Array(9).fill(null)
  })
	const [turn, setTurn] = useState(() => {
    if(window.localStorage.getItem('turn')){
      return window.localStorage.getItem('turn')
    }
    return TURNOS.X
  })
	const [winner, setWinner] = useState(null)

	
	const updateBoard = (index) => {
		if(board[index] || winner) return
		// Actualizar el tablero
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		// Cambiar el turno
		const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X
		setTurn(newTurn)
    // Local Storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
		// Revisar el ganador
		const newWinner = checkWinner(newBoard);
		// Los estados son asincronos
		if(newWinner) {
			setWinner(newWinner)
		}else if(checkEndGame(newBoard)) {
			setWinner(false);
		}
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNOS.X)
		setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

	}
	
  return(
		<main className="board">
			<h1>Tic Tac Toe</h1>
			<section className="game">
				{
					board.map((_, index) => {
						return (
							<Square
							key={index}
							index={index}
							updateBoard={updateBoard}
							>
								{board[index]}
							</Square>
						)
					})
				}
			</section>
			<section className="turn">
				<Square isSelected={turn === TURNOS.X}>{TURNOS.X}</Square>
				<Square isSelected={turn === TURNOS.O}>{TURNOS.O}</Square>
			</section>
			<WinnerModal winner={winner} resetGame={resetGame} />
		</main>
	)
}

export default App
