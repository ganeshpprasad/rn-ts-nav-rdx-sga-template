import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import {persistReducer, persistStore} from 'redux-persist';
// import {PersistGate} from 'redux-persist/integration/react';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// const persistConfig = {
//     key: 'rootKeyPersist',
//     storage: AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export const withReduxProvider = (C: React.FC) => (props: any) => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <C {...props} />
    {/* </PersistGate> */}
  </Provider>
);
