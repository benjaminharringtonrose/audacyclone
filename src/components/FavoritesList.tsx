/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Text, View } from 'react-native';

export const FavoritesList = () => {
  return (
    <FlatList
      data={FAVORITES_DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: 124,
              height: 124,
              borderRadius: 62,
              backgroundColor: 'grey',
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 15,
              }}>
              {item.title}
            </Text>
          </View>
        );
      }}
    />
  );
};

const FAVORITES_DATA = [
  { id: '0', title: 'Exclusive Stations' },
  { id: '1', title: 'Music' },
  { id: '2', title: 'Sports' },
  { id: '3', title: 'News & Talk' },
  { id: '4', title: 'Podcasts' },
];
