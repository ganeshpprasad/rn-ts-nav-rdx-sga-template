import {combineReducers} from 'redux';
import expenseReducer from './expenses/reducer';

const rootReducer = combineReducers({
  expenseReducer,
});

export default rootReducer;
