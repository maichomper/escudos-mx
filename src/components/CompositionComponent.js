import React from 'react';

export default ({composition}) => {
  return (
    <div>
      <h2 className="state-page__title">Composición</h2>
      <div> 
        {composition.split('\n').map((item, key) => {
          return <p key={`description-${key}`}>{item}<br /></p>
        })}
      </div>
    </div>
  );
} 
