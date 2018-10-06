import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {}

export default store = createStore(
  reducer,
  initialState
)

