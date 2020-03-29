import {all} from 'redux-saga/effects';

import addExpenseSaga from './expenses/addSaga';
import removeExpenseSaga from './expenses/removeSaga';

export default function* rootSaga() {
  yield all([addExpenseSaga, removeExpenseSaga]);
}
