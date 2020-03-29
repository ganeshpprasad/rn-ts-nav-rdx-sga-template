import {call, put, takeEvery} from 'redux-saga/effects';
import {REMOVE_EXPENSE, removedExpense, removingFailed} from './actions';
import {IRemoveExpense} from './types';

const removeFromDB = async (expenseId: string) => {
  return await expenseId;
};

function* removedExpenseGen({payload}: IRemoveExpense) {
  try {
    //   TODO define what the realmdb retuens
    // const didRemove =
    yield call(removeFromDB, payload);
    yield put(removedExpense(payload));
  } catch (error) {
    yield put(removingFailed(payload));
  }
}

export default function* removeExpense() {
  yield takeEvery<IRemoveExpense>(REMOVE_EXPENSE, removedExpenseGen);
}
