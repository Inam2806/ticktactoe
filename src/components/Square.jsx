const Square = ({ value, onClick, iswinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = iswinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
