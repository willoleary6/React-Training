import {RECEIVE_QUOTE} from "../actions";

export default (state ={}, {type,data}) =>{
  switch(type){
    case RECEIVE_QUOTE:
      return data;
    default:
      return state;
  }
}
