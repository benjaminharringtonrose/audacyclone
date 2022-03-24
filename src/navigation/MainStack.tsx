import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { colors } from '../constants';
import { PlayerScreen } from '../screens';
import { HomeScreenTabs } from './HomeScreenTabs';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.primary,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
      }}>
      <Stack.Screen name={'HomeScreenTabs'} component={HomeScreenTabs} />
      <Stack.Screen
        name={'PlayerScreen'}
        component={PlayerScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require('../../assets/audacy-logo.jpg')}
              resizeMode={'contain'}
              style={{ width: 200 }}
            />
          ),
          animationEnabled: true,
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}
