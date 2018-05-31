import {call, put, takeEvery ,takeLatest, all} from 'redux-saga/effects';
import {FETCH_QUOTE,DELETE_QUOTE,receiveDeleteQuote, receiveQuote} from '../actions.js'
import updateTable from './updateTable';
import axios from 'axios';

var dataStore = [];
var deletedDataStore = [];

function* fetchQuote(){
  try {
    let dataTemp = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    const data = yield call(updateTable, dataTemp,dataStore);
    yield put(receiveQuote(data));

  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
function* deleteQuote(){
  try{
    if(dataStore.length > 0) {
      deletedDataStore.push(dataStore.shift());
      yield put(receiveQuote(dataStore));
      yield put(receiveDeleteQuote(deletedDataStore));
    }else{
      alert('Nothing to delete');
    }
  }catch(e){
    console.log('failed to delete:'+ e);
  }
}
export function* fetchQuoteWatcher(){
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}
export function* deleteQuoteWatcher(){
  yield takeLatest(DELETE_QUOTE,deleteQuote)

}
export default function* rootSaga(){
  yield  all([
    fetchQuoteWatcher(),
    deleteQuoteWatcher()  ]);
}

