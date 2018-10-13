import createReducer from '../../util/utils'
import {
  EXAMPLE,
  EXAMPLE_TWO
} from './pokemonConstants'

export function exampleAction () {
  return {
    type: EXAMPLE
  }
}

export function exampleActionTwo (sampleData) {
  return {
    type: EXAMPLE_TWO,
    payload: sampleData
  }
}

const initialState = {
  propone: 'propone'
}

export default createReducer(initialState, {
  [EXAMPLE]: (state) => ({
    ...state,
    propone: 'proptwo'
  }),
  // [EXAMPLE_TWO]: (state, payload) => ({
  //   ...state,
  //   pokemon: payload,
  // })
})
