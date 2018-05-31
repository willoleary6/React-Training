import {RECEIVE_QUOTE, RECEIVE_DELETE_QUOTE} from "../actions";

export default (state ={}, {type,data}) =>{
  switch(type){
    case RECEIVE_QUOTE:
      //ensuring redux updates the components if we make press a button
      return data.map((data, index) => {
        if (index === RECEIVE_QUOTE.index) {
          // Copy the object before mutating
          return Object.assign({}, data, {
            completed: true
          })
        }
        return data;
      })
    default:
      return state;
  }
}
