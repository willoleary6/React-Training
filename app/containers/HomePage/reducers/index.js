import {combineReducers} from 'redux'
import data from './data';
import deletedData from './deletedData';

export default combineReducers({
  data,
  deletedData
})
