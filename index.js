/**
 *
 * Register screens and setup navigation
 *
 * @format
 */

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

import App from './src/App';
import {Navigation} from 'react-native-navigation';

// register screens
Navigation.registerComponent('app', () => App);

// set root
const setupScreens = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'app',
      },
    },
  });
};

Navigation.events().registerAppLaunchedListener(setupScreens);

// AppRegistry.registerComponent(appName, () => App);
