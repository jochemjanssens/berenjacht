import React from 'react';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Berenjacht</h1>
          <h2>Er zijn heel veel beertjes verstopt. Help jij ons ze te zoeken. Vind alle beertjes die in het rooster staan.</h2>
          
          <Link to="/main">Start met zoeken</Link>
        </header>
      </div>
    );
  }
}

export default Intro;
