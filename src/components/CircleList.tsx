/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface CircleListData {
  id: string;
  title: string;
}

interface CircleListProps {
  data: CircleListData[];
}

export const CircleList = ({ data }: CircleListProps) => {
  return (
    <FlatList
      data={data}
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
