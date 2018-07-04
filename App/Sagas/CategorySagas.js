import { call, put } from 'redux-saga/effects'
import CategoryActions from '../Redux/CategoryRedux'

export function * getCategory (api, action) {
  const response = yield call(api.getCategory)

  if (response.ok) {
    yield put(CategoryActions.categorySuccess(response.data))
  } else {
    yield put(CategoryActions.categoryFailure())
  }
}
