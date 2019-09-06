import React from 'react';
import { Link } from 'react-router-dom';

const StateListItem = ({ id, name }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{name}</Link></h3>
  </div>
);

export default StateListItem;