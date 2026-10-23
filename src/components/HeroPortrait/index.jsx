import React from 'react'
import PropTypes from 'prop-types';

const HeroPortrait = ({ hero }) => {
  return (
    <>
      <div className="victory-portrait">
        <img src={hero.image} alt={hero.name} />
      </div>
      <div className="victory-ribbon">
        ⚔️ Döyüşün qəhrəmanı: {hero.name}
      </div>
    </>
  )
}

export default HeroPortrait

HeroPortrait.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
}