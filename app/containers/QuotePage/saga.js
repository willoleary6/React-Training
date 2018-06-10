// import { take, call, put, select } from 'redux-saga/effects';
import {call, put,takeLatest,take ,all} from 'redux-saga/effects';
import {receiveQuote, addButtonEnable, addButtonDisable} from './actions';
import {FETCH_QUOTE,} from './constants';
import axios from 'axios';
import updateTable from "./updateTable";

//var dataStore = [];

function* fetchQuote(){
  try {
    //disable button so we get unique timestamp(for row id)
    yield put(addButtonDisable());
    //retrieve the data from the data.
    const receivedData = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    //format it to JSON then send it down to the reducer.
    yield put(receiveQuote(updateTable(receivedData)));
    //re-enable button
    yield put(addButtonEnable());

  }catch(e){
    console.log('failed to fetch:'+ e);
  }
}
export function* fetchQuoteWatcher(){
  //watching to see if fetchQuote was triggered.
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}



export default function* defaultSaga() {
  yield  all([
    fetchQuoteWatcher()
    ],

  );
}
