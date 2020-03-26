import React from 'react';
import bearPicture from './beer.png';

import './App.css';

const bears = [
  "Een beer met een tshirt",
  "een Beer met een hartje",
  "een Gele beer",
  "Een hele kleine beer",
  "Beer met een sjaal",
  "een Roze beer",
  "Beer met een strikje",
  "Een hele grote beer",
  "Een Disney beer",
  "Een beer met een hoedje",
  "Een bruine beer",
  "Een beer in een auto",
  "Twee beren tesamen voor een raam",
  "Een beer op het eerste verdiep",
  "Een staande beer",
  "Een zittende beer",
  "Een zwaaiende beer",
];

const shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const getRandomBears = () => {
  const shuffeledBears = shuffleArray(bears);
  const correctBears = shuffeledBears.slice(0, 9)
  correctBears[4] = "BINGO";
  return correctBears;
}

class App extends React.Component {
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

  restart() {
    this.setState({
      currentBears: getRandomBears(),
      clickedBears: [4],
      activeBingos: [],
      showPopup: false,
      showFinalPopup: false,
    });
  }

  render() {
    const { clickedBears, currentBears, showPopup, showFinalPopup } = this.state;

    return (
      <div className="app">
        { showFinalPopup && <div className="popup" onClick={() => this.restart()}>
              <div>
                <p>Je hebt alle beren gevonden, proficiat!</p>
               <p>Klik om opnieuw te beginnen</p>
              </div>
            </div>
        }
        {
          (showPopup && !showFinalPopup) && <div className="popup" onClick={() => this.closePopup()}>
              <div>
                <p>Je hebt een nieuwe bingo, proficiat!</p>
               <p>Klik om verder te spelen</p>
              </div>
            </div>
        }
        <header>
          <h1>Berenjacht</h1>
          <h2>Er zijn heel veel beertjes verstopt. Help jij ons ze te zoeken. Vind alle beertjes die in het rooster staan.</h2>
        </header>
        <div className="bears">
          {
           currentBears.map((bear, key) => (
              <button className={(clickedBears.includes(key) || bear === "BINGO") ? "clicked bear" : "bear" } key={key} onClick={() => this.handleBearClick(key)}>
                {
                  bear !== "BINGO"
                    ? <span>{bear}</span>
                    : <img src={bearPicture} alt="bingo beer" width="200" height="200" />
                }
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
