const mxStatesDefaultState = [];

export default (state = mxStatesDefaultState, action) => {
  if(action.type === 'LOAD_STATES') return action.mxStates;

  return state;
}