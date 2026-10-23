import React from 'react'
import { getTotalExp } from '../../common/helpers'
import Pokemon from '../Pokemon';
import PropTypes from 'prop-types';

const Team = ({ title, pokemons, isWinner, isDraw, side }) => {
  const totalExp = getTotalExp(pokemons);
  const result = isDraw ? 'Draw' : isWinner ? 'Winner' : 'Lose';

  return (
    <div className="team-block">
      <div className={`team-label ${isDraw ? 'draw' : isWinner ? 'win' : 'lose'}`}>
        {isWinner && '👑 '}{title}: {result} <span>{totalExp}</span>
      </div>

      <div className="team-row">
        {pokemons.map((pokemon, index) => (
          <div
            className="card-slot"
            key={pokemon.id}
            style={{ animationDelay: `${4 +  index * 0.15}s` }}
          >
            <Pokemon {...pokemon} side={side} isWinner={isWinner} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

Team.propTypes = {
  title: PropTypes.string.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  isWinner: PropTypes.bool,
  isDraw: PropTypes.bool,
  side: PropTypes.string,
}