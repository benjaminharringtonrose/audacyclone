import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants';

interface SearchBarProps extends ViewProps {
  textInputProps: TextInputProps;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <View {...props} style={styles.container}>
      <Ionicons
        style={styles.icon}
        name="ios-search"
        size={20}
        color={'white'}
      />
      <TextInput {...props.textInputProps} style={{ color: 'white' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    minHeight: 35,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
