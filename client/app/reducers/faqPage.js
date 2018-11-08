import {
  GET_FAQ_PAGE_DATA,
  GOT_FAQ_PAGE_DATA,
} from '../actions/faqPage';

import objectAssign from 'object-assign';
import { faqPageInitialState } from '../state/initialState';

function faqPageReducer(state = faqPageInitialState, action) {
  switch (action.type) {
    case GET_FAQ_PAGE_DATA:
      return objectAssign({}, state, {
        loadingFaqPageData: true
      });
    case GOT_FAQ_PAGE_DATA:
      return objectAssign({}, state, {
        faqPageData: action.data,
        loadingFaqPageData: false
      });
    default:
      return state;
  }
}

export default faqPageReducer;
