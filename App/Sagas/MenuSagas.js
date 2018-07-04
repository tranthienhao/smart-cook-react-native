import { call, put } from 'redux-saga/effects'
import MenuActions from '../Redux/MenuRedux'

export function * getMenu (api, action) {
  const response = yield call(api.getMenu)
  if (response.ok) {
    yield put(MenuActions.menuSuccess(response.data))
  } else {
    yield put(MenuActions.menuFailure())
  }
}
