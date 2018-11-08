import {
  GET_HOME_PAGE_DATA,
  GOT_HOME_PAGE_DATA,
} from '../actions/homePage';

import objectAssign from 'object-assign';
import { homePageInitialState } from '../state/initialState';

function homePageReducer(state = homePageInitialState, action) {
  switch (action.type) {
    case GET_HOME_PAGE_DATA:
      return objectAssign({}, state, {
        loadingHomePageData: true
      });
    case GOT_HOME_PAGE_DATA:
      return objectAssign({}, state, {
        homePageData: action.data,
        loadingHomePageData: false
      });
    default:
      return state;
  }
}

export default homePageReducer;
