import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {RECEIVE_DATA} from '../actions/Actions'
// 引入各reducers
function posts(state={},action){
  switch (action.type){
    case RECEIVE_DATA:
      return {...state,data:action.data}
    default:
      return state
  }
}
// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  posts
});

export default appReducers;
