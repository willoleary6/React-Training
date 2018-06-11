// import { take, call, put, select } from 'redux-saga/effects';
import {call, put,takeEvery ,all,takeLatest} from 'redux-saga/effects';
import {receiveQuote, addButtonEnable, addButtonDisable,deleteSelectedQuotes,deleteButtonEnable, deleteButtonDisable} from './actions';
import {DELETE_BUTTON_CLICKED,ADD_BUTTON_CLICKED} from './constants';
import axios from 'axios';
import convertQuoteToJSON from "./convertQuoteToJSON";


function* fetchQuote(){
  yield put(addButtonDisable());
  try {
    const receivedData = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values')
    yield put(receiveQuote(convertQuoteToJSON(receivedData.data)));
    yield put(addButtonEnable());
  }catch(e){
    alert('Add quote failed. try again later');
    yield put(addButtonEnable());
  }
}

export function* fetchQuoteWatcher(){
  //watching to see if fetchQuote was triggered.
  yield takeEvery(ADD_BUTTON_CLICKED,fetchQuote)
}

function* deleteButtonClicked(){
  yield put(deleteButtonDisable());
  yield put(deleteSelectedQuotes());
  yield put(deleteButtonEnable());
}
function* deleteButtonClickedWatcher(){
  yield takeEvery(DELETE_BUTTON_CLICKED,deleteButtonClicked)
}

export default function* defaultSaga() {
  yield  all([
    fetchQuoteWatcher(),
    deleteButtonClickedWatcher(),
    ],

  );
}
