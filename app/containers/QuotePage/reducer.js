/*
 *
 * QuotePage reducer
 *
 */



import addRowToSelected from './addRowToSelected';
import {
  ADD_BUTTON_ENABLE, ADD_BUTTON_DISABLE,
  CHECKBOX_CLICKED, RECEIVE_QUOTE,
  DELETE_BUTTON_ENABLE,DELETE_BUTTON_DISABLE,
  MOVE_SELECTED_QUOTES_TO_DELETED,
  REMOVE_SELECTED_QUOTES_FROM_DATA,
  CLEAR_SELECTED_QUOTES
} from './constants';


// The initial state of the App
const initialState = {
  addedQuotes: [],
  addButtonEnabled: false,
  deleteButtonEnabled: false,
  selectedRows: [],
  deletedData : [],
};

function quotePageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUOTE:
      //receiving quote from APi
      //adding a value to the array
      return{
        //state is a object containing addedQuotes.
        ...state,
        //set addedQuotes to equal the current value of addedQuotes + our new addedQuotes object
        addedQuotes: state.addedQuotes.concat(action.quoteData)
      }
     case ADD_BUTTON_ENABLE:
       //setting a value in the store
       return{
        ...state,
         addButtonEnabled: false
      }
    case ADD_BUTTON_DISABLE:
      return{
        ...state,
        addButtonEnabled: true
      }
    case DELETE_BUTTON_ENABLE:
      //setting a value in the store
      return{
        ...state,
        deleteButtonEnabled: false
      }
    case DELETE_BUTTON_DISABLE:
      return{
        ...state,
        deleteButtonEnabled: true
      }
    case CHECKBOX_CLICKED:
      var selectedRowsList = addRowToSelected(action.id,state.selectedRows);
      return{
        ...state,
        selectedRows: selectedRowsList
      }
    case MOVE_SELECTED_QUOTES_TO_DELETED:
      if(state.selectedRows.length > 0){
        let selectedRows = state.selectedRows;
        let addedQuotes = state.addedQuotes;
        let filtered = state.deletedData.concat(addedQuotes.filter(function(quote){
          if(selectedRows.indexOf(quote.id) > -1){
            return quote;
          }
        }));

        return {
          ...state,
          deletedData: filtered
        }
      }else{
        alert('No rows selected to be deleted');
      }
    case REMOVE_SELECTED_QUOTES_FROM_DATA:
      if(state.selectedRows.length > 0){
       let selectedRows = state.selectedRows;
       let filtered = state.addedQuotes.filter(function(addedDataElement){

          if(selectedRows.indexOf(addedDataElement.id) < 0){
            return addedDataElement;
          }});

        return{
          ...state,
          addedQuotes: filtered
          }
      }
    case CLEAR_SELECTED_QUOTES:
      return{
        ...state,
        selectedRows: []
      }
      default:
        return state;
  }
}

export default quotePageReducer;
