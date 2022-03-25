import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors, images } from '../constants';
import { LoadingScreen, PlayerScreen } from '../screens';
import { RootState } from '../store';
import { initApplicationRequested } from '../store/settings/slice';
import { HomeScreenTabs } from './HomeScreenTabs';
import { MainStackParamList } from './types';

const Stack = createStackNavigator<MainStackParamList>();

export function MainStack() {
  const { initialized } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!initialized) {
      dispatch(initApplicationRequested());
    }
  }, [initialized]);
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
      {initialized ? (
        <>
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
        </>
      ) : (
        <Stack.Screen name={'LoadingScreen'} component={LoadingScreen} />
      )}
    </Stack.Navigator>
  );
}
