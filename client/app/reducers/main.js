import { combineReducers } from 'redux';
import homePageReducer from './homePage';
import faqPageReducer from './faqPage';

export default function createReducer(injectedReducers) {

  let appReducer = combineReducers({
    homePageReducer: homePageReducer,
    faqPageReducer: faqPageReducer,
    ...injectedReducers
  });

  const rootReducer = (state, action) => {
    if (action.type === 'DESTROYED_APP') {
      state = undefined;
    }
    return appReducer(state, action)
  }

  return rootReducer
}
