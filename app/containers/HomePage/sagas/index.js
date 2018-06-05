import {call, put,takeLatest, all} from 'redux-saga/effects';
import {FETCH_QUOTE,DELETE_QUOTE,receiveDeleteQuote, receiveQuote} from '../actions.js'
import updateTable from './updateTable';
import formatTableData from './formatTableData';
import moveToDeleted from './moveToDeleted';
import numberChecked from './numberChecked';
import axios from 'axios';

var dataStore = [];
var deletedDataStore = [];

function* fetchQuote(){
  try {
    let dataTemp = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    dataStore.push(yield call(updateTable, dataTemp));
    const data = yield call(formatTableData,dataStore,true);
    yield put(receiveQuote(data));
  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
function* deleteQuote(){
  try{
    if(dataStore.length > 0 && numberChecked() > 0) {
      moveToDeleted(dataStore,deletedDataStore);
      yield put(receiveQuote(yield call(formatTableData,dataStore,true)));
      yield put(receiveDeleteQuote(yield call(formatTableData,deletedDataStore,false)));
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
    deleteQuoteWatcher()]);
}

