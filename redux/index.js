/*
 * @Author: soda
 * @Date: 2019-12-27 14:36:10
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-27 15:50:06
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

export const initStore = (initialState = {}) => {
  const middleWare = () => {
    if (process.env.NODE_ENV === 'development') {
      return composeWithDevTools(applyMiddleware(thunk));
    } else {
      return applyMiddleware(thunk);
    }
  }
  return createStore(reducer, initialState, middleWare());
};
