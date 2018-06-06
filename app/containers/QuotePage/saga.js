// import { take, call, put, select } from 'redux-saga/effects';
import {call, put,takeLatest, all} from 'redux-saga/effects';
import {receiveQuote} from './actions';
import {FETCH_QUOTE} from './constants';
import axios from 'axios';

//var dataStore = [];

function* fetchQuote(){
  try {
    const data = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    yield put(receiveQuote(data));
    /*
    let dataTemp = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    dataStore.push(yield call(updateTable, dataTemp));
    const data = yield call(formatTableData,dataStore,true);
    yield put(receiveQuote(data));
    */

  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
export function* fetchQuoteWatcher(){
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}

    // Individual exports for testing
export default function* defaultSaga() {
  yield  all([
    fetchQuoteWatcher()]);
}
