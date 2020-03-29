// =====================
// ACTiONS
// =====================

// action to add a new expense
export interface IAddExpense {
  type: string;
  payload: IExpenseValue;
}

// action returned after adding to realmdb
export interface IAddedExpense {
  type: string;
  payload: IAddedExpenseResult;
}

export interface IRemoveExpense {
  type: string;
  payload: string;
}

export type ExpenseActionTypes = IAddedExpense | IRemoveExpense;

// =====================
// Data types
// =====================

export interface IAddedExpenseResult {
  id: string;
  expense: IExpenseValue;
}

export interface IExpenseValue {
  name: string;
  amount: number;
}

// =====================
// REDUCER STATES
// =====================

export interface IExpenseState {
  expenses: ReadonlyArray<IExpenseValue> | [];
}
