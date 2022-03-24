/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants';

export const SearchBar = (props: TextInputProps) => {
  return (
    <View
      {...props}
      style={{
        backgroundColor: colors.secondary,
        minHeight: 35,
        borderRadius: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Ionicons
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}
        name="ios-search"
        size={20}
        color={'white'}
      />
      <TextInput
        style={{ color: 'white' }}
        placeholder={'Search station, city, genre, or podcast'}
        placeholderTextColor={'white'}
        underlineColorAndroid={'transparent'}
      />
    </View>
  );
};
