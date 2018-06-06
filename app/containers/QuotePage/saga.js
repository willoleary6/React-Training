// import { take, call, put, select } from 'redux-saga/effects';
import {call, put,takeLatest, all} from 'redux-saga/effects';
import {receiveQuote,deleteQuote} from './actions';
import {FETCH_QUOTE,DELETE_QUOTE} from './constants';
import axios from 'axios';

//var dataStore = [];

function* fetchQuote(){
  try {
    const data = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    yield put(receiveQuote(data));

  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
export function* fetchQuoteWatcher(){
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}


function* deleteQuoteTrigger(){
  yield call(deleteQuote);
  YD
}
export function* deleteQuoteWatcher(){
  yield takeLatest(DELETE_QUOTE,deleteQuoteTrigger)
}

   // Individual exports for testing
export default function* defaultSaga() {
  yield  all([
    fetchQuoteWatcher(),
    deleteQuoteWatcher()]
  );
}
