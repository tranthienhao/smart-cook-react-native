import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  dishRequest: [],
  dishSuccess: ['listDish'],
  dishFailure: null
})

export const DishTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  listDish: [],
  error: null
})

/* ------------- Selectors ------------- */

export const DishSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { listDish } = action
  return state.merge({ fetching: false, error: null, listDish })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, listDish: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DISH_REQUEST]: request,
  [Types.DISH_SUCCESS]: success,
  [Types.DISH_FAILURE]: failure
})
