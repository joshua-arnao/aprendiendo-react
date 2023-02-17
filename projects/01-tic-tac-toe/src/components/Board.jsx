import { Square } from './Square';

export function Board({ square, index, updateBoard }) {
  return (
    <div className="cell" key={index}>
      <span className="cell__content">
        <Square>{square}</Square>
      </span>
    </div>
  );
}
