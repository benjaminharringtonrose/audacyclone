import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { colors, images } from '../constants';
import { PlayerScreen } from '../screens';
import { HomeScreenTabs } from './HomeScreenTabs';
import { MainStackParamList } from './types';

const Stack = createStackNavigator<MainStackParamList>();

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
              source={images.audacyLogo}
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
