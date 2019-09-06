import React from 'react';
import StateList from './StateList';
import mxStates from '../data/mxStates';

export default () => (
  <div>
    <StateList mxStates={mxStates} />
  </div>
);