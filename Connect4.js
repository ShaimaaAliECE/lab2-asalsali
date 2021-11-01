import { useReducer } from 'react'
import { Row } from './Row'
import { Button, Text } from '@chakra-ui/react'
import * as gameStyles from '../styles/Home.module.css'

//2
const gameReducer = (state,action) => { return state}

//3
const initialGameState = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  gameOver: false,
  message: '',
}

export const Connect4 = () => {
  const [gameState, dispatchGameState] = useReducer(
    gameReducer,
    initialGameState
  )

//4
  const play = (c) => {}

  return (
    <>
      <Button
        colorScheme="purple"
        className={gameStyles.button}
      >
        New Game
      </Button>

//5
      <table>
        <tbody>
          {gameState.board.map((row, i) => (
//6
            <Row key={i} row={row} play={play} />
          ))}
        </tbody>
      </table>

      <Text>{gameState.message}</Text>
    </>
  )
}