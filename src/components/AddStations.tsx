import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const AddStations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeContainer}>
        <Icon
          name={'close'}
          size={24}
          color={'grey'}
          style={styles.closeIcon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{'Add Your Favorite Stations'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#062580',
  },
  closeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  text: {
    color: '#ff6a00',
    fontWeight: '700',
    fontSize: 15,
  },
});
