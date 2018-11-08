import { fork, all } from 'redux-saga/effects';
import homePageSagas from './homePage';
import faqPageSagas from './faqPage';

const sagas = [
  ...faqPageSagas, ...homePageSagas //, ...moreSagas
];

export default function* root() { //this function is being run by sagaMiddleware.run
  yield all(sagas.map(saga => fork(saga)));
}
