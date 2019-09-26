import React from 'react';
import { Link } from 'react-router-dom';

const StateListItem = ({ slug, title, img }) => {
  const shieldImg = `/img/${slug}.png`;

  return (
    <div className="state">
      <Link to={`/state/${slug}`}>
        <img className="state__img" src={shieldImg} alt={`Coat of Arms of ${title} `} />
        <hr className="state__divider" />
        <h3 className="state__title">{title}</h3>
      </Link>
    </div>
  );
} 

export default StateListItem;
