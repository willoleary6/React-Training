/*
 *
 * QuotePage reducer
 *
 */

import { fromJS } from 'immutable';
import updateTable from './updateTable';
import formatTableData from './formatTableData';
import moveToDeleted from './moveToDeleted';
import numberChecked from './numberChecked';
import {
  DEFAULT_ACTION, DELETE_QUOTE,
  RECEIVE_QUOTE
} from './constants';

// The initial state of the App
const initialState = {
  data: []
  };

function quotePageReducer(state = initialState, action) {
  switch (action.type) {

    case RECEIVE_QUOTE:
      //receiving quote from APi
      return {
        //state is a object containing data.
        ...state,
        //set data to equal the current value of data + our new data object
        data: state.data.concat( action.quoteData)
      }

      /*case DELETE_QUOTE:
      try{
        if(dataStore.length > 0 && numberChecked() > 0) {
          moveToDeleted(dataStore,deletedDataStore);
          return state
            .set('deletedData',formatTableData(deletedDataStore,true))
          //yield put(receiveQuote(yield call(formatTableData,dataStore,true)));
          //yield put(receiveDeleteQuote(yield call(formatTableData,deletedDataStore,false)));
        }else{
          alert('Nothing to delete');
        }
      }catch(e){
        console.log('failed to delete:'+ e);
      }
*/  case DEFAULT_ACTION:
    return state;
      //ensuring redux updates the components if we make press a button
      /*return action.data.map((data, index) => {
        if (index === RECEIVE_QUOTE.index) {
          // Copy the object before mutating
          return state
            .set('data', data);
        }
        return data;
      })*/
    default:
      return state;
  }
}

export default quotePageReducer;
