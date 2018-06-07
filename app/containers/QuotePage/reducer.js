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
const initialState =
  {
data: [], a1:{}
};


function quotePageReducer(state = initialState, action) {
  switch (action.type) {

    case RECEIVE_QUOTE:
      //dataStore.push(updateTable(action.data));
      //state.quotePage.quotePage.data.push(action.data);
      //state.quotePage
      console.log('JSON object');
      console.log(JSON.stringify(state));
      console.log('JSON object End');


    //  return state.setIn(['quotePage','data'],[action.quoteData]);

      return {
        ...state,
        data: state.data.concat( action.quoteData)
      }
      //return [].concat(state.data, action.quoteData)
//return state.set('data',action.quoteData);










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
*/
      case DEFAULT_ACTION:
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
