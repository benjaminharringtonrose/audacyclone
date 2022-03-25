import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { MainStack } from './navigation';
import { StatusBar } from 'react-native';
import { store } from './store';

LogBox.ignoreLogs(['[react-native-gesture-handler]']);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
