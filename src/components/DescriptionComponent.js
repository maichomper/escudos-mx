import React from 'react';

export default ({description}) => {
  return (
    <div className="state-page__intro padding"> 
      {description.split('\n').map((item, key) => {
        return <p key={`description-${key}`}>{item}<br /></p>
      })}
    </div>
  );
} 
