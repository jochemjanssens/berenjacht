import React from 'react';
import { Link } from 'react-router-dom';

import bearPicture from '../beer.png';

class Intro extends React.Component {
  render() {
    return (
      <div className="app intro">
        <header>
          <h1>Berenjacht</h1>
          <h2>Er zijn heel veel beertjes verstopt. Help jij Bazel de beer met al haar vriendjes terug te vinden?</h2>
          <h2>OPGELET: Houd steeds 1,5m afstand van de mensen rondom je en was na het berenjagen steeds je handen.</h2>

          <img src={bearPicture} alt="bingo beer" width="200" height="200" />

          <Link to="/main">BEGINNER: start met zoeken</Link>
          <Link to={{
            pathname: "/main",
            state: {
              tiles: 15,
            }
          }}>GEVORDERDE: Start met zoeken</Link>
        </header>
        <footer>
          <p>
            Gemaakt met ♥ door <a href="https://janssensjochem.be">Jochem Janssens</a>
          </p>
          <p>
            <a href="https://github.com/jochemjanssens/berenjach">Meewerken aan Berenjacht?</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Intro;
