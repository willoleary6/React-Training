/*
 *
 * QuotePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  RECEIVE_QUOTE
} from './constants';

const initialState = fromJS({});

function quotePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RECEIVE_QUOTE:
      //ensuring redux updates the components if we make press a button
      return action.data.map((data, index) => {
        if (index === RECEIVE_QUOTE.index) {
          // Copy the object before mutating
          return state
            .set('data', data);
        }
        return data;
      })
    default:
      return state;
  }
}

export default quotePageReducer;
