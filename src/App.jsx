import './style.scss';
import Board from './components/board';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(square);
  const nextplayer = isXNext ? 'B' : 'A';
  const statusmessage = winner
    ? `Winner is ${winner}`
    : `Player ${nextplayer} to move`;

  const hangleSquareclick = clickPosition => {
    // null, 'X', 'O'
    if (square[clickPosition] || winner) {
      return; // help of lock X change nhi kar sakte
    }
    setSquare(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusmessage}</h2>

      <h10>Player A -- O</h10>
      <h10>Player B -- X</h10>
      <Board square={square} hangleSquareclick={hangleSquareclick} />
    </div>
  );
}

export default App;
