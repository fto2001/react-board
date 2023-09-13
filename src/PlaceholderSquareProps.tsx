import React, { useState, useEffect } from 'react';

interface PlaceholderSquareProps {
  onMove: (direction: string) => void;
  size: number;
}

const PlaceholderSquare: React.FC<PlaceholderSquareProps> = ({ onMove, size }) => {
  const [currentPosition, setCurrentPosition] = useState('1 / 1');

  const handleMove = (direction: string) => {
    const [x, y] = currentPosition.split('/').map((str) => parseInt(str.trim()));

    if (direction === 'ArrowUp') {
      if (x > 1) {
        setCurrentPosition(`${x - 1} / ${y}`);
        onMove(direction);
      }
    } else if (direction === 'ArrowDown') {
      if (x < size) {
        setCurrentPosition(`${x + 1} / ${y}`);
        onMove(direction);
      }
    } else if (direction === 'ArrowLeft') {
      if (y > 1) {
        setCurrentPosition(`${x} / ${y - 1}`);
        onMove(direction);
      }
    } else if (direction === 'ArrowRight') {
      if (y < size) {
        setCurrentPosition(`${x} / ${y + 1}`);
        onMove(direction);
      }
    }
  };

  useEffect(() => {
    const [x, y] = currentPosition.split('/').map((str) => parseInt(str.trim()));

    if (x > size || y > size) {
      setCurrentPosition(`${Math.min(x, size)} / ${Math.min(y, size)}`);
    }
  }, [size]);

  return (
    <div
      className="square placeholder"
      style={{ gridArea: currentPosition }}
      tabIndex={0}
      onKeyDown={(e) => handleMove(e.key)}
    ></div>
  );
};

export default PlaceholderSquare;