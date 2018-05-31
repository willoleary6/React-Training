import {call, put, takeEvery ,takeLatest, all} from 'redux-saga/effects';
import {FETCH_QUOTE, receiveQuote} from '../actions.js'
import updateTable from './updateTable';
import axios from 'axios';

var dataStore = [];

function* fetchQuote(){
  try {
    let dataTemp = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    const data = yield call(updateTable, dataTemp,dataStore);
    //dataStore.push(data);
    //console.log(data);

    yield put(receiveQuote(data));

  }catch(e){
    console.log('failed:'+ e);
  }
}

export function* fetchQuoteWatcher(){
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}
export default function* rootSaga(){
  yield  all([
    fetchQuoteWatcher()
  ]);
}

