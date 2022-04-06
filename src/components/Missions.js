import React from 'react';
import './css/Missions.css';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div>
          <Title headline="Missões" />
        </div>
        <section className="Missions">
          {missions.map((e) => (
            <MissionCard
              name={ e.name }
              year={ e.year }
              country={ e.country }
              destination={ e.destination }
              key={ e.name }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
