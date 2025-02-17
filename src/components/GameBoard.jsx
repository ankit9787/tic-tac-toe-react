import React, { useState } from "react";
const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectBox, activePlayerSymbol }) => {
  const [symbol, setSymbol] = useState(intialGameBoard);

  const handleClickedBox = (rowIndex, colIndex) => {
    setSymbol((symbolSet) => {
      const updatedBoard = [...symbolSet.map((innerArr) => [...innerArr])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectBox();
  };

  return (
    <ol id="game-board">
      {symbol.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleClickedBox(rowIndex, colIndex)}
                    >
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
