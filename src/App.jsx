import './style.scss';
import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/statusmessage';
import { calculateWinner } from './winner';
function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(square);

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
      <StatusMessage winner={winner} isXNext={isXNext} square={square} />
      <h10>
        <span className="text-orange">Player A</span> -- O
      </h10>
      <h10>
        <span className="text-green">Player B</span> -- X
      </h10>
      <Board square={square} hangleSquareclick={hangleSquareclick} />
    </div>
  );
}

export default App;
