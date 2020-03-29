import {
  IAddExpense,
  IAddedExpense,
  IAddedExpenseResult,
  IExpenseValue,
  IRemoveExpense,
} from './types';

export const ADD_EXPENSE = 'add_expense';
export const ADDED_EXPENSE = 'added_expense';
export const ADDING_FAILED = 'adding_failed';
export const REMOVE_EXPENSE = 'remove_expense';
export const REMOVED_EXPENSE = 'removed_expense';
export const REMOVING_FAILED = 'removing_failed';

export const addExpense = (expenseObject: IExpenseValue): IAddExpense => ({
  type: ADD_EXPENSE,
  payload: expenseObject,
});

export const addedExpense = (payload: IAddedExpenseResult): IAddedExpense => ({
  type: ADDED_EXPENSE,
  payload,
});

// TODO Write a adding failed action

export const removeExpense = (expenseId: string): IRemoveExpense => ({
  type: REMOVE_EXPENSE,
  payload: expenseId,
});

export const removedExpense = (expenseId: string): IRemoveExpense => ({
  type: REMOVED_EXPENSE,
  payload: expenseId,
});

export const removingFailed = (expenseId: string): IRemoveExpense => ({
  type: REMOVING_FAILED,
  payload: expenseId,
});
