import {all} from 'redux-saga/effects';

import addExpenseSaga from './expenses/sagas/addSaga';
import removeExpenseSaga from './expenses/sagas/removeSaga';

export default function* rootSaga() {
  yield all([addExpenseSaga, removeExpenseSaga]);
}
