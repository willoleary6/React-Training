import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//import { helloSaga } from './sagas'
import reducer from '../../reducers.js'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
//sagaMiddleware.run(helloSaga)

//const action = type => store.dispatch({type})
export default store;
