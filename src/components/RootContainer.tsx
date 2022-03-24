/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface RootContainerProps {
  children: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

export const RootContainer = ({ children, style }: RootContainerProps) => {
  return <View style={style}>{children}</View>;
};
