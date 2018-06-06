/*
 *
 * QuotePage actions
 *
 */

import {
  DEFAULT_ACTION, DELETE_QUOTE, FETCH_QUOTE, RECEIVE_DELETE_QUOTE, RECEIVE_QUOTE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
//going up to the store
export const fetchQuote = ()=> ({type: FETCH_QUOTE});
export const deleteQuote = ()=> ({type: DELETE_QUOTE});
//going down to the UI
export const receiveDeleteQuote = ()=> ({type: RECEIVE_DELETE_QUOTE});
export const receiveQuote = data => ({type: RECEIVE_QUOTE,data});
