import { call, put, takeEvery } from 'redux-saga/effects';
import apiEndpoint from '../../helpers/constants/apiEndpoint';
import { GET_FAQ_PAGE_DATA, GOT_FAQ_PAGE_DATA } from '../faqPage';

/***** SAGA START ******/
export let getFaqPageDataApi = () => {
  return fetch(`${apiEndpoint}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        faqs {
          body
          title
        }
      }
    ` })
  }).then((response) => {
    return response.json().then((result) => {
      return result.data;
    })
  }).catch(error => {
    console.error(error);
    throw error;
  });
}

export function* loadGetFaqPageData() {
  try {
    const data = yield call(getFaqPageDataApi);
    yield put({ type: GOT_FAQ_PAGE_DATA, data });
  } catch (error) {
    throw error;
  }
}
/***** SAGA END ******/

function* watchRequests() {
  yield* [takeEvery(GET_FAQ_PAGE_DATA, loadGetFaqPageData)];
}


export default [watchRequests];
