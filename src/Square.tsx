import React from 'react';

interface SquareProps {
  position: string;
  handleMove: (direction: string) => void; 
}

const Square: React.FC<SquareProps> = ({ position, handleMove }) => {
  return (
    <div
      className="square"
      style={{ gridArea: position }}
      onClick={() => handleMove(position)}
    ></div>
  );
};

export default Square;