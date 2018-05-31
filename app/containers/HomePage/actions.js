export const FETCH_QUOTE = 'FETCH_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

export const fetchQuote = ()=> ({type: FETCH_QUOTE});
export const receiveQuote = data => ({type: RECEIVE_QUOTE,data})
