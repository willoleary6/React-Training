import {call, put, takeEvery ,takeLatest, all} from 'redux-saga/effects';
import {FETCH_QUOTE,DELETE_QUOTE,receiveDeleteQuote, receiveQuote, MARK_FOR_DELETE} from '../actions.js'
import updateTable from './updateTable';
import formatTableData from './formatTableData';
import moveToDeleted from './moveToDeleted';
import axios from 'axios';
var markedForDelete = [];
var dataStore = [];
var deletedDataStore = [];
function* markForDelete(){
  console.log(test);
}
function* fetchQuote(){
  try {
    let dataTemp = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    dataStore.push(yield call(updateTable, dataTemp));
    const data = yield call(formatTableData,dataStore,true,markedForDelete);
    yield put(receiveQuote(data));

  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
function* deleteQuote(){
  try{
    if(dataStore.length > 0) {
      moveToDeleted(markedForDelete,dataStore,deletedDataStore);

      //deletedDataStore.push(dataStore.shift());
      yield put(receiveQuote(yield call(formatTableData,dataStore,true)));
      yield put(receiveDeleteQuote(yield call(formatTableData,deletedDataStore,false)));

      console.log(markedForDelete);
    }else{
      alert('Nothing to delete');
    }
  }catch(e){
    console.log('failed to delete:'+ e);
  }
}
export function* markForDeleteWatcher(){
  yield takeLatest(MARK_FOR_DELETE,markForDelete)
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
    deleteQuoteWatcher(),
    markForDeleteWatcher()]);
}

