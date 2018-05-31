import {call, put, takeEvery ,takeLatest, all} from 'redux-saga/effects';
import {FETCH_QUOTE, receiveQuote} from '../actions.js'
import axios from 'axios';

function* fetchQuote(){
  try {
    let dataTemp = yield call([axios, axios.get], 'http://ne-dev-pegasus-quotes.azurewebsites.net/api/values');
    const data = yield call(updateTable, dataTemp);

    yield put(receiveQuote(data));

  }catch(e){
    console.log('failed:'+ e);
  }
}
function updateTable(data){

    //breaking down the string response from the server into json
    var stringResponse = data.data;

    //last index of '-' is normally the prefix to the author of the quote.
    var quote = stringResponse.substring(0, stringResponse.lastIndexOf("-")).trim();
    //cut the quote out of the unfiltered string.
    stringResponse = stringResponse.substring(stringResponse.lastIndexOf("-") + 1);
    //there is normally a ',' preceding the movie/tv show so we simply cut between the '-' and ','.
    var author = stringResponse.substring(stringResponse.indexOf('-') + 1, stringResponse.indexOf(',')).trim();
    stringResponse = stringResponse.substring(stringResponse.lastIndexOf(",") + 1).trim();
    //whats left is the movie (Generally :P)
    var movie = stringResponse;
    //store variables as json.
    var json = {'quote': quote, 'author': author, 'movie': movie};

    //add json to pre existing list of quotes.

  return json;
  //call fetch qoute again so if user calls this function again, we have a quote loaded up.
  //this.fetchQuote();
}
export function* fetchQuoteWatcher(){
  yield takeLatest(FETCH_QUOTE,fetchQuote)
}
export default function* rootSaga(){
  yield  all([
    fetchQuoteWatcher()
  ]);
}

