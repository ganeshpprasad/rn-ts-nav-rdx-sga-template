/**
 *
 * App with entry logic
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import React from 'react';
import {Navigation} from 'react-native-navigation';

declare var global: {HermesInternal: null | {}};

import {withReduxProvider} from './store';

import {HOME, AUTH, DETAILS} from './screens';

import Home from './screens/Home';
import Details from './screens/Details';
import Auth from './screens/Auth';

const Screens = new Map<string, React.FC<any>>();

Screens.set(HOME, Home);
Screens.set(DETAILS, Details);
Screens.set(AUTH, Auth);

Screens.forEach((Comp, key) => {
  Navigation.registerComponent(
    key,
    () => withReduxProvider(Comp),
    () => Comp,
  );
});

const loggedIn = {
  stack: {
    children: [
      {
        component: {
          name: HOME,
        },
      },
    ],
    options: {},
  },
};

const notLoggedIn = {
  component: {
    name: AUTH,
  },
};

const App = () => {
  let screen;

  // You have to kill the app and repoen for this method to work
  // TODO Check if inbetween the app you are logged out from backend

  if (true) {
    screen = loggedIn;
  } else {
    screen = notLoggedIn;
  }

  Navigation.setRoot({
    root: screen,
  });
};

export default App;
