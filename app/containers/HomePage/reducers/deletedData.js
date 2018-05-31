import { RECEIVE_DELETE_QUOTE} from "../actions";

export default (state ={}, {type,deletedData}) =>{
  switch(type){

    case RECEIVE_DELETE_QUOTE:
      //ensuring redux updates the components if we make press a button
      return deletedData.map((DeletedData, index) => {
        if (index === RECEIVE_DELETE_QUOTE.index) {
          // Copy the object before mutating
          return Object.assign({}, DeletedData, {
            completed: true
          })
        }
        return DeletedData;
      })
    default:
      return state;
  }
}
