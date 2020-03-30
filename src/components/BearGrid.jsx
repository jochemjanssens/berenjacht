import React from 'react';

import BearTile from './BearTile';

function BearGrid({ currentBears, clickedBears, handleBearClick }) {
    return (
      <div className="bears">
        {
         currentBears.map((bear, key) => (
            <BearTile
              bear={bear}
              active={clickedBears.includes(key) || bear === "BINGO"}
              key={key}
              handleBearClick={() => handleBearClick(key)}
            />
          ))
        }
      </div>
    );
  }

export default BearGrid;
