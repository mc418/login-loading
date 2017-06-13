import 'babel-polyfill'
import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import combineReducers from "./reducers"
import mySaga from "./sagas/chatSaga"
import loginSaga from "./sagas/login"
import createSagaMiddleware from "redux-saga"


const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(promise(), sagaMiddleware, thunk, logger());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers, composeEnhancers(middleware));

sagaMiddleware.run(mySaga);
sagaMiddleware.run(loginSaga);

