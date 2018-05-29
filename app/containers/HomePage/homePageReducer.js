import {ADD_QUOTE,DELETE_QUOTE} from "./actions/types";

const initialState = {
  items: [],
  item:{}
}
export default function(state = initialState, action){
  switch (action.type){
    case ADD_QUOTE:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;


  }
}
