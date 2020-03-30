import React from 'react';
import { Link } from 'react-router-dom';

import bearPicture from '../beer.png';

class Intro extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Berenjacht</h1>
          <h2>Er zijn heel veel beertjes verstopt. Help jij ons ze te zoeken. Vind alle beertjes die in het rooster staan.</h2>
          
          <img src={bearPicture} alt="bingo beer" width="200" height="200" />

          <Link to="/main">Start met zoeken</Link>
        </header>
      </div>
    );
  }
}

export default Intro;
