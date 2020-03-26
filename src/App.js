import React from 'react';
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
  shuffeledBears[4] = "BINGO";
  return shuffeledBears.slice(0, 9);
}

function App() {
  return (
    <div className="app">
      <header>
        <h1>Berenjacht</h1>
        <h2>Er zijn heel veel beertjes verstopt. Help jij ons ze te zoeken. Vind alle beertjes die in het rooster staan.</h2>
      </header>
      <div className="bears">
        {
          getRandomBears().map((bear, key) => (
            <div className="bear" key={key}>
              {
                bear !== "BINGO"
                  ? <span>{bear}</span>
                  : <img src="https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwbe86cf5a/26613x.jpg?sw=600&sh=600&sm=fit&q=70" alt="bingo beer" width="200" height="200" />
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
