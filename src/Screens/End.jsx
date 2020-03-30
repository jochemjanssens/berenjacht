import React from 'react';
import { Link } from 'react-router-dom';

class End extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Berenjacht</h1>
          <h2>Je hebt alle beren gevonden, proficiat!</h2>
          
          <Link to="/intro">Zoek opnieuw</Link>
        </header>
      </div>
    );
  }
}

export default End;
