import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { AddStations, CircleList, SquareList } from '../components';
import { HomeSectionListData, HomeSectionListType } from '../types';
import {
  colors,
  FAVORITES_DATA,
  HOME_SECTIONLIST_DATA,
  MUSIC_STATIONS_DATA,
  STATIONS_DATA,
} from '../constants';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            name={'devices'}
            size={24}
            color={'white'}
            style={{ marginRight: 10 }}
            onPress={() => {}}
          />
        );
      },
    });
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{'Elevate your experience'}</Text>
        <Text style={styles.headerDescription}>
          {'Customize your homepage by adding your favorite stations below'}
        </Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: HomeSectionListData }) => {
    switch (item.type) {
      case HomeSectionListType.discover:
        return <CircleList data={FAVORITES_DATA} />;
      case HomeSectionListType.stations:
        return <SquareList data={STATIONS_DATA} />;
      case HomeSectionListType.music:
        return <SquareList data={MUSIC_STATIONS_DATA} />;
      case HomeSectionListType.addStations:
        return <AddStations />;
      case HomeSectionListType.sportsPodcasts:
        return <View style={{ width: 100, height: 100 }} />;
      default:
        return <View />;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <SectionList
        sections={HOME_SECTIONLIST_DATA}
        keyExtractor={(item, index) => item.id + index}
        ListHeaderComponent={renderHeader}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 21,
    fontWeight: '700',
    paddingVertical: 10,
    color: '#ffffff',
  },
  headerContainer: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 19,
    marginBottom: 5,
  },
  headerDescription: {
    color: '#ff9f59',
    fontWeight: '700',
    marginHorizontal: 30,
    fontSize: 12,
  },
});
