import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../constants';

interface SquareListData {
  id: string;
  title: string;
  subtitle: string;
}

interface SquareListProps {
  data: SquareListData[];
}

export const SquareList = ({ data }: SquareListProps) => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.textContainer} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 7 },
  textContainer: {
    width: 120,
    height: 120,
    backgroundColor: colors.grey,
  },
  title: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    width: 120,
  },
  subtitle: {
    color: colors.white,
  },
});
