import { call, put, takeEvery } from 'redux-saga/effects';
import apiEndpoint from '../../helpers/constants/apiEndpoint';
import { GET_HOME_PAGE_DATA, GOT_HOME_PAGE_DATA } from '../homePage';

/***** SAGA START ******/
export let getHomePageDataApi = () => {
  return fetch(`${apiEndpoint}/`, {
    method: 'POST',
    body: JSON.stringify({
      query: `
      {
        homepage {
          heading
          subheading
          heroImageUrl
        }
      }
    ` })
  }).then((response) => {
    return response.json().then((result) => {
      return result;
    })
  }).catch(error => {
    console.error(error);
    throw error;
  });
}

export function* loadGetHomePageData() {
  try {
    const data = yield call(getHomePageDataApi);

    yield put({ type: GOT_HOME_PAGE_DATA, data });
  } catch (error) {
    throw error;
  }
}
/***** SAGA END ******/

function* watchRequests() {
  yield* [takeEvery(GET_HOME_PAGE_DATA, loadGetHomePageData)];
}


export default [watchRequests];
