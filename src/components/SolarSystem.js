import React from 'react';
import Title from './Title';
import './css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
      </div>
    );
  }
}

export default SolarSystem;
