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
  ADD_BUTTON_ENABLE,ADD_BUTTON_DISABLE,
  DEFAULT_ACTION, DELETE_QUOTE,
  RECEIVE_QUOTE
} from './constants';
import {CHANGE_USERNAME} from "../HomePage/constants";

// The initial state of the App
const initialState = {
  data: [],
  addButtonDisabler: false
  };

function quotePageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUOTE:
      //receiving quote from APi
      //adding a value to the array
      return{
        //state is a object containing data.
        ...state,
        //set data to equal the current value of data + our new data object
        data: state.data.concat(action.quoteData)
      }
     case ADD_BUTTON_ENABLE:
       //setting a value in the store
       return{
        ...state,
        addButtonDisabler: false
      }
    case ADD_BUTTON_DISABLE:
      return{
        ...state,
        addButtonDisabler: true
      }


  case DEFAULT_ACTION:
    return state;
    default:
      return state;
  }
}

export default quotePageReducer;
