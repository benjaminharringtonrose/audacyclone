import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ExploreCellProps {
  label: string;
}

export const ExploreCell = ({ label }: ExploreCellProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 19,
    fontWeight: '600',
  },
});
