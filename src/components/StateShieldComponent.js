import React from 'react';

export default ({slug, title}) => {
  const shieldImg = `/img/${slug}.png`;

  return (
    <img 
      className="state-page__shield"
      src={shieldImg}
      alt={`Coat of Arms of ${title} `} 
    />
  );
} 