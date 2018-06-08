// import { take, call, put, select } from 'redux-saga/effects';
import {call, put,takeLatest,take, all} from 'redux-saga/effects';
import {receiveQuote,deleteQuote,addButtonToggle} from './actions';
import {FETCH_QUOTE,DELETE_QUOTE} from './constants';
import axios from 'axios';
import updateTable from "./updateTable";

//var dataStore = [];

function* fetchQuote(){
  try {
    //retrieve the data from the data.
    console.log('saga');
    yield put(addButtonToggle(true));
    const receivedData = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    //format it to JSON then send it down to the reducer.
    yield put(receiveQuote(updateTable(receivedData)));
    yield put(addButtonToggle(false));
  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
export function* fetchQuoteWatcher(){
  //watching to see if fetchQuote was triggered.
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}
function* deleteQuoteTrigger(){
  yield call(deleteQuote);

}
export function* deleteQuoteWatcher(){
  yield takeLatest(DELETE_QUOTE,deleteQuoteTrigger)
}
export default function* defaultSaga() {
  yield  all([
    fetchQuoteWatcher(),
    deleteQuoteWatcher()]
  );
}
