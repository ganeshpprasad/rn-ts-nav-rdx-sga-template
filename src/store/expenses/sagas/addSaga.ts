import {call, put, takeEvery} from 'redux-saga/effects';
import {ADD_EXPENSE, addedExpense} from '../actions';
import {IExpenseValue, IAddExpense} from '../types';

async function addTheExpenseToDB(expenseObject: IExpenseValue) {
  // do the realm operation here
  return await expenseObject;
}

function* addExpensesGen({payload}: IAddExpense) {
  console.log('at the gen', payload);

  try {
    // @ts-ignore: call fn type is not working properly
    const id = yield call(addTheExpenseToDB, payload);
    // TODO proper id
    const result = {
      id: '1',
      expense: id,
    };
    yield put(addedExpense(result));
  } catch (error) {}
}

export default function* addExpense() {
  yield takeEvery<IAddExpense>(ADD_EXPENSE, addExpensesGen);
}
