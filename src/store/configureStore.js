import { createStore } from 'redux';
import mxStateReducer from '../reducers/mxStates';

export default () => {
  const store = createStore(mxStateReducer, []);
  
  return store;
}