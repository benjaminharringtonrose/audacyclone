import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

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
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: colors.grey,
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
});
