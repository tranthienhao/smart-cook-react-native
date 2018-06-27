import { call, put } from 'redux-saga/effects'
import DishActions from '../Redux/DishRedux'

export function * getDish (api, action) {
  const response = yield call(api.getDish)
  if (response.ok) {
    yield put(DishActions.dishSuccess(response.data))
  } else {
    yield put(DishActions.dishFailure())
  }
}
