import {ADDED_EXPENSE, REMOVE_EXPENSE} from './actions';
import {IExpenseState, ExpenseActionTypes} from './types';

const initialStateExpenses: IExpenseState = {
  expenses: [],
};

export default (state = initialStateExpenses, action: ExpenseActionTypes) => {
  const {type, payload} = action;

  switch (type) {
    case ADDED_EXPENSE:
      // FIXME Type check the payload to be IexpenseValue
      const addedExpenses = [...state.expenses, payload];
      return {...state, expenses: addedExpenses};

    case REMOVE_EXPENSE:
      // TODO TS type of payload is string or number but here it must be string
      const IdToRemove = payload;
      const removedExpenses = state.expenses.filter(i => i.name !== IdToRemove);
      return {...state, expenses: removedExpenses};

    default:
      return state;
  }
};
