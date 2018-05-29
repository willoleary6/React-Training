import {ADD_QUOTE,DELETE_QUOTE} from "./types.js";
/*export function addQuote(){
  return function(dispatch){
    fetch('http://ne-dev-pegasus-quotes.azurewebsites.net/api/values')
    //since we get a promise element, we must first resolve it.
      .then((response) => {
        return response.text();
      })
      //once resolves we store it in the posts state
      .then(data =>  dispatch({
        type:ADD_QUOTE,
        payload: data
      }));
  }


}
export const addQuote = () => dispatch => {

    fetch('http://ne-dev-pegasus-quotes.azurewebsites.net/api/values')
    //since we get a promise element, we must first resolve it.
      .then((response) => {
        return response.text();
      })
      //once resolves we store it in the posts state
      .then(data => dispatch({
        type: ADD_QUOTE,
        payload: data
      }));

}*/

export const addQuote = () => (
  dispatch => {

    fetch('http://ne-dev-pegasus-quotes.azurewebsites.net/api/values')
    //since we get a promise element, we must first resolve it.
      .then((response) => {
        return response.text();
      })
      //once resolves we store it in the posts state
      .then(data => dispatch({
        type: ADD_QUOTE,
        payload: data
      }));
  }
);
