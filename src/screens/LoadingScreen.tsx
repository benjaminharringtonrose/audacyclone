import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../constants';

export const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
      <ActivityIndicator />
    </View>
  );
};
