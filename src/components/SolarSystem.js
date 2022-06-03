import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="sistema" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          {planets.map((iten) => (
            <PlanetCard
              key={ iten.name }
              planetName={ iten.name }
              planetImage={ iten.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
