/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export const MusicStationsList = () => {
  return (
    <FlatList
      data={STATIONS_DATA}
      horizontal
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: 'grey',
              }}></View>
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
  title: { color: '#ffffff', fontWeight: '700', fontSize: 15, width: 120 },
  subtitle: { color: '#ffffff' },
});

const STATIONS_DATA = [
  { id: '0', title: 'She Sings', subtitle: 'Celebrating the p..' },
  { id: '1', title: 'Justin Beiber Radio', subtitle: 'Listen up if you lo..' },
  { id: '2', title: 'Women that Rock', subtitle: 'Women that Rock' },
];
