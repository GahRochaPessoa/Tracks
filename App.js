// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/AccountScreen';
import SigninScreen from './src/SigninScreen';
import SignupScreen from './src/SignupScreen';
import TrackCreateScreen from './src/TrackCreateScreen';
import TrackDetailScreen from './src/TrackDetailScreen';
import TrackListScreen from './src/TrackListScreen';
import { Provider as AuthProvider } from './context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => (
  <AuthProvider>
    <App ref={(navigator) => { setNavigator(navigator); }} />
  </AuthProvider>
);
