export const RESET_STORE = 'ACTION_RESET_STORE'

export function createReducer (initialState, reducerMap, resetReducer = {[RESET_STORE]: () => initialState}) {
  const finalMap = {
    ...reducerMap,
    ...resetReducer,
  }

  return (state = initialState, action) => {
    const reducer = finalMap[action.type]

    if (reducer) {
      return reducer(state, action.payload, action)
    }

    return state
  }
}