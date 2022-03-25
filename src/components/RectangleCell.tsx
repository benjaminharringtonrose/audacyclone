import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

interface RectangleCellProps {
  label: string;
}

export const RectangleCell = ({ label }: RectangleCellProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '600',
  },
});
