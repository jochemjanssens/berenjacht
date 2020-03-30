import React from 'react';
import { Redirect } from 'react-router-dom';

import bears from '../data/bears';
import { shuffleArray } from '../utils/data.utils';
import BearTile from '../components/BearTile';
import BearGrid from '../components/BearGrid';


const getRandomBears = () => {
  const shuffeledBears = shuffleArray(bears);
  const correctBears = shuffeledBears.slice(0, 9)
  correctBears[4] = "BINGO";
  return correctBears;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBears: getRandomBears(),
      clickedBears: [4],
      activeBingos: [],
      showPopup: false,
      showFinalPopup: false,
    };
  }

  bearsIncludesValues(bears, values) {
    return values.filter(value => bears.includes(value)).length === values.length;
  }

  checkBingo(bears) {
    const ranges = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

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

    this.setState({
      ...this.state,
      clickedBears: newClickedBears,
      activeBingos,
      showPopup,
      showFinalPopup: bingos.length === 6
    });
  }

  closePopup() {
    this.setState({
      ...this.state,
      showPopup: false,
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
