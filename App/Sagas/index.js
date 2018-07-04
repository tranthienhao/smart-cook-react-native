import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { DishTypes } from '../Redux/DishRedux'
import { CategoryTypes } from '../Redux/CategoryRedux'
import { MenuTypes } from '../Redux/MenuRedux'

/* ------------- Sagas ------------- */

import { getDish } from './DishSagas'
import { getCategory } from './CategorySagas'
import { getMenu } from './MenuSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(DishTypes.DISH_REQUEST, getDish, api),
    takeLatest(MenuTypes.MENU_REQUEST, getMenu, api),
    takeLatest(CategoryTypes.CATEGORY_REQUEST, getCategory, api)
  ])
}
