/*
 *
 * QuotePage reducer
 *
 */

import { fromJS } from 'immutable';
import updateTable from './updateTable';
import formatTableData from './formatTableData';
import {
  DEFAULT_ACTION,
  RECEIVE_QUOTE
} from './constants';

const initialState = fromJS({});
var dataStore = [];

function quotePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RECEIVE_QUOTE:
      dataStore.push(updateTable(action.data));
      return state
        .set('data',formatTableData(dataStore,true))

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
