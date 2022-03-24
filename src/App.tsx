import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreenTabs } from './navigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <HomeScreenTabs />
      </NavigationContainer>
    </>
  );
};

export default App;
