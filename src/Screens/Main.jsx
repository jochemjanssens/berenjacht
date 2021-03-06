import React from 'react';
import { Redirect } from 'react-router-dom';
import { pathOr } from 'ramda';

import bears from '../data/bears';
import { shuffleArray } from '../utils/data.utils';
import BearGrid from '../components/BearGrid';


const getRandomBears = (nBears, middleBear) => {
  const shuffeledBears = shuffleArray(bears);
  const correctBears = shuffeledBears.slice(0, nBears);
  correctBears[middleBear] = "BINGO";
  return correctBears;
}

class Main extends React.Component {
  tiles = 9;

  constructor(props) {
    super(props);

    const numberOfTiles = pathOr(9, ['location', 'state', 'tiles'], props);
    this.tiles = numberOfTiles;
    const middleBear = Math.floor(numberOfTiles / 2);
    
    this.state = {
      currentBears: getRandomBears(numberOfTiles, middleBear),
      clickedBears: [middleBear],
      activeBingos: [],
      showPopup: false,
      showFinalPopup: false,
    };
  }

  bearsIncludesValues(bears, values) {
    return values.filter(value => bears.includes(value)).length === values.length;
  }

  checkBingo(bears) {
    const ranges9 = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    
    const ranges15 = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
      [12, 13, 14],
      [0, 3, 6, 9, 12],
      [1, 4, 7, 10, 13],
      [2, 5, 8, 11, 14],
    ];

    const ranges = this.tiles === 15 ? ranges15 : ranges9;

    const activeBingos = ranges.map(range => this.bearsIncludesValues(bears, range));
    return activeBingos;
  }

  handleBearClick(key) {
    const { clickedBears } = this.state;
    let newClickedBears = [];
    if (clickedBears.includes(key)) {
      newClickedBears = clickedBears.filter(bear => bear !== key);
    } else {
      newClickedBears = [
        ...clickedBears,
        key
      ];
    }

    const activeBingos = this.checkBingo(newClickedBears);
    const bingos = activeBingos.filter(bingo => bingo);
    const oldBingos = this.state.activeBingos.filter(bingo => bingo);

    const showPopup = bingos.length > oldBingos.length;

    const totalBingos = this.tiles === 15 ? 8 : 6;

    this.setState({
      ...this.state,
      clickedBears: newClickedBears,
      activeBingos,
      showPopup,
      showFinalPopup: bingos.length === totalBingos
    });
  }

  render() {
    const { clickedBears, currentBears, showPopup, showFinalPopup } = this.state;

    return (
      <div className="app">
        {
          showFinalPopup && <Redirect to="/end"/>
        }
        {
          (showPopup && !showFinalPopup) && (
            <div className="popup">
              <div>
                <p className="popup-title">Je hebt een nieuwe bingo, proficiat!</p>
              </div>
            </div>
          )
        }
        <BearGrid 
          currentBears={currentBears}
          clickedBears={clickedBears}
          handleBearClick={(key) => this.handleBearClick(key)}
        />
      </div>
    );
  }
}

export default Main;
