/*
 *
 * QuotePage actions
 *
 */

import {
  DEFAULT_ACTION,
  DELETE_QUOTE,
  FETCH_QUOTE,
  RECEIVE_DELETE_QUOTE,
  RECEIVE_QUOTE,
  ADD_BUTTON_ENABLE,
  ADD_BUTTON_DISABLE,
  ROW_CHECKED
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
//going up to the store
export const fetchQuote = ()=> ({type: FETCH_QUOTE});
export const rowChecked = rowID =>({type: ROW_CHECKED,rowID});

export const deleteQuote = ()=> ({type: DELETE_QUOTE});
//going down to the UI
export const receiveDeleteQuote = ()=> ({type: RECEIVE_DELETE_QUOTE});


export const receiveQuote = quoteData => ({type: RECEIVE_QUOTE,quoteData});

export const addButtonEnable = () => ({type: ADD_BUTTON_ENABLE});
export const addButtonDisable = () => ({type: ADD_BUTTON_DISABLE});
