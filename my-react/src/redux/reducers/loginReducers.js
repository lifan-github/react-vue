import * as types from '../constant/actionTypes';


let loginInit = {
  userinfo: {}
};

export default function LoginReducers(state = loginInit, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {userinfo: action.data});
    default:
      return state;
  }
}