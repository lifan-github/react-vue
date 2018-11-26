import * as types from '../constant/actionTypes';


let noticeInit = {
  allNotices: {},
};

export default function AllOrders(state = noticeInit, action) {
  switch (action.type) {
    case types.GET_ALL_NOTICE:
      return Object.assign({}, state, {allNotices: action.data});
    default:
      return state;
  }
}


