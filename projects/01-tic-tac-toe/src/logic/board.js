import { WINNER_COMBOS } from "../constants"


// null no ganador, false un empate
export const checkWinner = (boardToCheck) => {
    // Se revisan todas las combinaciones
    for(const combo of WINNER_COMBOS) {
        const [a,b,c] = combo
        if(
            boardToCheck[a] && // 0 -> x u o
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ){
            return boardToCheck[a]
        }
    }
    // no hay ganador
    return null
}


export function checkEndGame (newBoard) {
  return newBoard.every(square => square !== null)
}
