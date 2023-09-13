import React, { useState } from 'react';
import './index.css';
import Board from './board';

const App: React.FC = () => {
  const [boardSize, setBoardSize] = useState(3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = +e.target.value;
    if (!isNaN(newSize) && newSize > 0) {
      setBoardSize(newSize);
    }
  };

  return (
    <div className="container">
      <label>
        Size of board:
        <input
          className='input'
          type="number"
          value={boardSize}
          onChange={handleInputChange}
        />
      </label>
      <div className="legend">
        <p>Use Arrow keys to move the square</p>
      </div>
      <Board size={boardSize} />
    </div>
  );
};

export default App;