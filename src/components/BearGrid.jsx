import React from 'react';

import BearTile from './BearTile';

function BearGrid({ currentBears, clickedBears, handleBearClick }) {
    const classes = currentBears.length === 9 ? "bears" : "bears big"
    
    return (
      <div className={classes}>
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
