import React from 'react'
import PropTypes from 'prop-types';

const WarriorAvatar = ({ side, id = 0 }) => {
  const isMuslim = side === 'muslim';
  const shades = isMuslim
    ? ['#0f8a63', '#14684a', '#2e9e6a']
    : ['#9b1c1c', '#7a0c0c', '#a4161a'];
  const main = shades[id % 3];
  const gold = '#ffd166';
  const steel = '#cfd8dc';
  const plume = id % 2 === 0;

  return (
    <svg viewBox="0 0 100 100" className="fut-img" role="img" aria-label="warrior">
      <g stroke={steel} strokeWidth="4" strokeLinecap="round">
        <line x1="14" y1="14" x2="86" y2="86" />
        <line x1="86" y1="14" x2="14" y2="86" />
      </g>
      <g stroke={gold} strokeWidth="5" strokeLinecap="round">
        <line x1="22" y1="30" x2="32" y2="20" />
        <line x1="78" y1="30" x2="68" y2="20" />
      </g>
      <path d="M27 46 H73 V64 Q73 84 50 95 Q27 84 27 64 Z" fill={main} stroke={gold} strokeWidth="3" />
      {isMuslim ? (
        <g>
          <circle cx="48" cy="67" r="11" fill={gold} />
          <circle cx="53" cy="65" r="9.5" fill={main} />
          <polygon
            points="59,60 60.6,64 65,64 61.5,66.6 62.8,71 59,68.4 55.2,71 56.5,66.6 53,64 57.4,64"
            fill={gold}
          />
        </g>
      ) : (
        <g stroke={gold} strokeWidth="3" strokeLinecap="round" fill="none">
          <line x1="50" y1="54" x2="50" y2="82" />
          <polygon points="50,52 45,60 55,60" fill={gold} />
          <line x1="40" y1="70" x2="60" y2="70" />
        </g>
      )}
      {plume && <path d="M50 4 Q60 8 56 20 Q50 14 44 20 Q40 8 50 4 Z" fill={gold} />}
      <path d="M30 46 Q30 16 50 14 Q70 16 70 46 Z" fill={steel} stroke="#78909c" strokeWidth="2" />
      <rect x="47" y="24" width="6" height="22" fill="#90a4ae" />
      <path d="M30 46 H70" stroke={main} strokeWidth="5" />
    </svg>
  )
}

export default WarriorAvatar

WarriorAvatar.propTypes = {
  side: PropTypes.string,
  id: PropTypes.number,
}