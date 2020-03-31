import React, {useCallback} from 'react';
import {View, Button, FlatList, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useSelector, useDispatch} from 'react-redux';

import {DETAILS} from '.';
import {addExpense, removeExpense} from '../store/expenses/actions';
import {IExpenseValue} from '../store/expenses/types';

const DetailScreenNav = {
  name: DETAILS,
  passProps: {},
  options: {
    topBar: {
      title: {
        text: `Details screen`,
      },
    },
  },
};

const Home: React.FC = ({componentId}): JSX.Element => {
  // =========== navigation
  const pushDetailsScreen = () => {
    Navigation.push(componentId, {
      component: DetailScreenNav,
    });
  };

  // Value from globalState
  // TODO globals state and expense type
  const {expenses} = useSelector((s: any) => s.expenseReducer);
  console.log('expenses', expenses);

  // Mock expense
  const ex = {
    name: 'food',
    amount: 45,
  };

  // ========= actions
  const dispatch = useDispatch();
  const _addExpense = useCallback(
    (exp: IExpenseValue) => dispatch(addExpense(exp)),
    [dispatch],
  );

  const _removeExpense = () => {};

  const renderExpenses = ({item}) => {
    console.log('item', item.expense.name);

    return <Text>{item.expense.name}</Text>;
  };

  // check if logged in then return this
  if (true) {
    return (
      <View>
        <Button title={`move to screen`} onPress={() => pushDetailsScreen()} />
        <Button
          title={`add`}
          onPress={() => {
            console.log('pressed');
            _addExpense(ex);
          }}
        />
        <Button title={`remove`} onPress={() => _removeExpense()} />
        <FlatList
          data={expenses} //TODO type check i
          renderItem={renderExpenses}
        />
      </View>
    );
  }
};

export default Home;
