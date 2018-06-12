/*
 *
 * QuotePage actions
 *
 */

import {
  DEFAULT_ACTION,
  DELETE_BUTTON_CLICKED,
  ADD_BUTTON_CLICKED,
  RECEIVE_QUOTE,
  ADD_BUTTON_ENABLE,
  ADD_BUTTON_DISABLE,
  DELETE_BUTTON_ENABLE,
  DELETE_BUTTON_DISABLE,
  CHECKBOX_CLICKED,
  MOVE_SELECTED_QUOTES_TO_DELETED,
  REMOVE_SELECTED_QUOTES_FROM_DATA,
  CLEAR_SELECTED_QUOTES
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
//going up to the store
export const addButtonClicked = ()=> ({type: ADD_BUTTON_CLICKED});
export const deleteButtonClicked = ()=> ({type: DELETE_BUTTON_CLICKED});

export const receiveQuote = quoteData => ({type: RECEIVE_QUOTE,quoteData});

export const addButtonEnable = () => ({type: ADD_BUTTON_ENABLE});
export const addButtonDisable = () => ({type: ADD_BUTTON_DISABLE});

export const deleteButtonEnable = () => ({type: DELETE_BUTTON_ENABLE});
export const deleteButtonDisable = () => ({type: DELETE_BUTTON_DISABLE});

export const checkBoxClicked = id => ({type: CHECKBOX_CLICKED, id});

export const moveSelectedQuotesToDeleted = () => ({type: MOVE_SELECTED_QUOTES_TO_DELETED});
export const removeSelectedQuotesFromData = () => ({type: REMOVE_SELECTED_QUOTES_FROM_DATA});
export const clearSelectedQuotes = () => ({type: CLEAR_SELECTED_QUOTES});
