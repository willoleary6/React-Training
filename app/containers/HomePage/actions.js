export const FETCH_QUOTE = 'FETCH_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const RECEIVE_DELETE_QUOTE = 'RECEIVE_DELETE_QUOTE';
export const MARK_FOR_DELETE = 'MARK_FOR_DELETE';
//going up to the store
export const fetchQuote = ()=> ({type: FETCH_QUOTE});
export const deleteQuote = ()=> ({type: DELETE_QUOTE});
//going down to the UI
export const receiveDeleteQuote = deletedData => ({type: RECEIVE_DELETE_QUOTE,deletedData});
export const receiveQuote = data => ({type: RECEIVE_QUOTE,data});
