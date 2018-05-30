import { fromJS } from 'immutable';

const initialState = fromJS({
  counter:0,
  quotes: []
});

function homePageReducer(state = initialState, action){
  switch (action.type){
    case 'RECIEVE_QUOTE':
      return Object.assign({},state,{
        quotes : action.payload
      });
    default:
      return state;
  }
}
export default homePageReducer;
