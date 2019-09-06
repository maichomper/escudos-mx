import React from 'react';
import { Link } from 'react-router-dom';

const StateListItem = ({ slug, title, img }) => (
  <div>
    <img 
      src={img}
      alt={`Coat of Arms of ${title} `} />
    <Link to={`/state/${slug}`}><h3>{title}</h3></Link>
  </div>
);

export default StateListItem;
