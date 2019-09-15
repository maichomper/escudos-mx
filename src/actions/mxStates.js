export const listMxStates = () => ({
  type: 'LIST_STATES'
})

export const loadMxStates = (mxStates) => ({
  type: 'LOAD_STATES',
  mxStates
})