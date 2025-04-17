/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppManager from "./src/AppManager/AppManager";

AppRegistry.registerComponent(appName, () => AppManager);
