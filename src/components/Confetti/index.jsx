import React from 'react'
import PropTypes from 'prop-types';

const colors = ['#ffd166', '#ef476f', '#06d6a0', '#118ab2', '#ffffff'];

const Confetti = ({ count = 40, startDelay = 6.5 }) => {
  return (
    <div className="confetti">
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            background: colors[i % colors.length],
            animationDelay: `${startDelay + (i % 8) * 0.3}s`,
            animationDuration: `${2.5 + (i % 4) * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti

Confetti.propTypes = {
  count: PropTypes.number,
  startDelay: PropTypes.number,
}