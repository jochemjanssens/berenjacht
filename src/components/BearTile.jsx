import React from 'react';
import bearPicture from '../beer.png';

function BearTile({ bear, active, handleBearClick }) {
    return (
      <button className={active ? "clicked bear" : "bear" } onClick={() => handleBearClick()}>
        {
          bear !== "BINGO"
            ? <span>{bear}</span>
            : <img src={bearPicture} alt="bingo beer" width="200" height="200" />
        }
      </button>
    );
  }

export default BearTile;
