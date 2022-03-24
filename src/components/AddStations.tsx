/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const AddStations = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 100,
        backgroundColor: '#062580',
      }}>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Icon
          name={'close'}
          size={24}
          color={'grey'}
          style={{ paddingHorizontal: 5, paddingVertical: 5 }}
        />
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#ff6a00',
            fontWeight: '700',
            fontSize: 15,
          }}>
          {'Add Your Favorite Stations'}
        </Text>
      </View>
    </View>
  );
};
