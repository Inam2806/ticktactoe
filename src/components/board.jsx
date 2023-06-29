import Square from './Square';

const Board = ({ square, hangleSquareclick, WinningSquares }) => {
  const renderSquare = position => {
    //[0,1,2]
    const iswinningSquare = WinningSquares.includes(position);
    return (
      <Square
        value={square[position]}
        onClick={() => hangleSquareclick(position)}
        iswinningSquare={iswinningSquare}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
