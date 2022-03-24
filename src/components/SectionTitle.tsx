import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../constants';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 10,
      }}>
      <Text style={{ color: colors.white, fontSize: 21, fontWeight: '700' }}>
        {title}
      </Text>
    </View>
  );
};
