import React from 'react';
import Title from './Title';
import './css/SolarSystem.css';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
        <section className="PlanetCard">
          {planets.map((e) => (
            <PlanetCard planetName={ e.name } planetImage={ e.image } key={ e.name } />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
