import React from 'react';
import PropTypes from 'prop-types';
import './css/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <div className={ `${planetName} imagem` }>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
        <div className="planet">
          <p data-testid="planet-name">{ planetName }</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
