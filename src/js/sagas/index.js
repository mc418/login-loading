import { combineReducers } from "redux"

import loginSaga from "./login"
import mySaga from "./chatSaga"

export default combineReducers({
    loginSaga,
    mySaga
})
