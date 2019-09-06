import React from 'react';
import mxStates from '../data/mxStates';

export default (props) => {
  const slug = props.match.params.slug;
  const mxState = mxStates.find((mxState) => mxState.slug === slug);

  return (
    <div>
      <h2>{mxState.title}</h2>
      <img 
        src={mxState.img}
        alt={`Coat of Arms of ${mxState.title} `} 
      />
      <div>
        <p>{mxState.description}</p>
      </div>
    </div>
  );
};