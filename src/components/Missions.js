import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Mission extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <div className="container-mission">
          {missions.map((iten, index) => (
            <MissionCard
              key={ index }
              name={ iten.name }
              country={ iten.country }
              year={ iten.year }
              destination={ iten.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Mission;
