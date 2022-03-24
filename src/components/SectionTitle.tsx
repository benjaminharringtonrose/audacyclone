import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 21,
    fontWeight: '700',
  },
});
