/*
 * @Author: soda
 * @Date: 2019-12-27 14:41:59
 * @LastEditors: soda
 * @LastEditTime: 2019-12-27 14:42:07
 */
import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';

const initialState = {
  token: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, { token: action.payload });
    case USER:
      return Object.assign({}, state, { user: action.payload });
    case DEAUTHENTICATE:
      return { token: null };
    default:
      return state;
  }
};