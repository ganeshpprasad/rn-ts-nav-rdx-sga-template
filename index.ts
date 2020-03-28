/**
 *
 * Register screens and setup navigation
 *
 * @format
 */

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// import App from './src/App';
import {Navigation} from 'react-native-navigation';

import App from './src/App';

Navigation.events().registerAppLaunchedListener(() => App());

// AppRegistry.registerComponent(appName, () => App);
