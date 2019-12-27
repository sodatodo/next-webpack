/*
 * @Author: soda
 * @Date: 2019-12-27 14:40:02
 * @LastEditors: soda
 * @LastEditTime: 2019-12-27 14:41:04
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authentication: authReducer
});

export default rootReducer;
