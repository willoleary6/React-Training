/*
 *
 * QuotePage reducer
 *
 */



import addRowToSelected from './addRowToSelected';
import {
  ADD_BUTTON_ENABLE, ADD_BUTTON_DISABLE,
  DEFAULT_ACTION, CHECKBOX_CLICKED,
  RECEIVE_QUOTE, DELETE_SELECTED_QUOTES,
  DELETE_BUTTON_ENABLE,DELETE_BUTTON_DISABLE
} from './constants';


// The initial state of the App
const initialState = {
  data: [],
  addButtonState: false,
  deleteButtonState: false,
  selectedRows: [],
  deletedData : [],
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
         addButtonState: false
      }
    case ADD_BUTTON_DISABLE:
      return{
        ...state,
        addButtonState: true
      }
    case DELETE_BUTTON_ENABLE:
      //setting a value in the store
      return{
        ...state,
        deleteButtonState: false
      }
    case DELETE_BUTTON_DISABLE:
      return{
        ...state,
        deleteButtonState: true
      }
    case CHECKBOX_CLICKED:
      var selectedRowsList = addRowToSelected(action.id,state.selectedRows);
      return{
        ...state,
        selectedRows: selectedRowsList
      }
    case DELETE_SELECTED_QUOTES:
      if(state.selectedRows.length > 0) {
        var tempDataArray = [];
        var tempDeletedDataArray = [];
        for (var i = 0; i < state.data.length; i++) {
          if (state.selectedRows.indexOf(state.data[i].id.toString()) > -1) {
            tempDeletedDataArray.push(state.data[i]);
          } else {
            tempDataArray.push(state.data[i]);
          }
        }
        return {
          ...state,
          deletedData: state.deletedData.concat(tempDeletedDataArray),
          data: tempDataArray,
          selectedRows: []
        }
      }else{
        alert('No rows selected to be deleted');
        return state;
      }
      case DEFAULT_ACTION:
        return state;
      default:
        return state;
  }
}

export default quotePageReducer;
