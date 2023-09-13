import React, { useState } from 'react';
import PlaceholderSquare from './PlaceholderSquareProps';
import Square from './Square';

interface BoardProps {
  size: number;
}

const Board: React.FC<BoardProps> = ({ size }) => {
  const [currentPosition, setCurrentPosition] = useState('1 / 1');

  const handleMove = (direction: string) => {
    const [x, y] = currentPosition.split('/').map((str) => parseInt(str.trim()));

    if (direction === 'ArrowUp' && x > 1) {
      setCurrentPosition(`${x - 1} / ${y}`);
    } else if (direction === 'ArrowDown' && x < size) {
      setCurrentPosition(`${x + 1} / ${y}`);
    } else if (direction === 'ArrowLeft' && y > 1) {
      setCurrentPosition(`${x} / ${y - 1}`);
    } else if (direction === 'ArrowRight' && y < size) {
      setCurrentPosition(`${x} / ${y + 1}`);
    }
  };

  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const position = `${i + 1} / ${j + 1}`;
        if (i === 0 && j === 0) {
          board.push(<PlaceholderSquare key="placeholder" onMove={handleMove} size={size} />);
        } else {
          board.push(<Square key={i * size + j} position={position} handleMove={handleMove} />);
        }
      }
    }
    return <div className="board">{board}</div>;
  };

  return <div className="board-container">{renderBoard()}</div>;
};

export default Board;