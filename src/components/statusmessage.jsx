const StatusMessage = ({ winner, isXNext, square }) => {
  const noMoveLeft = square.every(squareValue => squareValue != null);
  const nextplayer = isXNext ? 'B' : 'A';

  const rendersendermessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMoveLeft) {
      return (
        <>
          <span className="text-orange">O </span>and{' '}
          <span className="text-green"> X </span> tied
        </>
      );
    }
    if (!winner && !noMoveLeft) {
      return (
        <>
          Player{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextplayer}
          </span>{' '}
          to move
        </>
      );
    }
    return null;
  };
  return <h2 className="status-message">{rendersendermessage()}</h2>;
};
export default StatusMessage;
