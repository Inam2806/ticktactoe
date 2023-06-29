import './style.scss';
import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/statusmessage';
import History from './components/History';
import { calculateWinner } from './winner';

const NEW_GAME = [{ square: Array(9).fill(null), isXNext: false }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setcurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const { winner, WinningSquares } = calculateWinner(gamingBoard.square);

  console.log({ history, currentMove });

  const hangleSquareclick = clickPosition => {
    // null, 'X', 'O'
    if (gamingBoard.square[clickPosition] || winner) {
      return; // help of lock X change nhi kar sakte
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquaresState = lastGamingState.square.map(
        (squareValue, position) => {
          if (clickPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        square: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setcurrentMove(move => move + 1);
  };

  //use in history
  const moveTo = move => {
    setcurrentMove(move);
  };

  //adding game rest button
  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setcurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <h8>
        <span className="text-orange">Player A</span> -- O
      </h8>
      <h8>
        <span className="text-green">Player B</span> -- X
      </h8>
      <Board
        square={gamingBoard.square}
        hangleSquareclick={hangleSquareclick}
        WinningSquares={WinningSquares}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start new Game
      </button>
      <h2
        style={{
          fontWeight: 'normal',
        }}
      >
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
