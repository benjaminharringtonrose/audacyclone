import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { AddStations, CircleList, SquareList } from '../components';
import {
  HomeSectionListData,
  HomeSectionListType,
  SectionListMetaData,
} from '../types';
import {
  colors,
  FAVORITES_DATA,
  HOME_SECTIONLIST_DATA,
  MUSIC_STATIONS_DATA,
  STATIONS_DATA,
} from '../constants';

// I assume this data for the SectionList will be fetched at init -
// also noticed that the order of it changes which is super cool.
// The mock data I created is super slim - I'm sure there's a whole lot
// more that comes in for each section. When a user presses any buttons,
// there's navigation params coming with it to fetch what is
// needed for the next screen.

// Question - are any of these images static? If so, they could be moved to the native
// side to improve performance. If they're on the native side, there's zero load time. Even
// if the images are statically stored on the js side, it still has to go over the bridge

export const HomeScreen = () => {
  const navigation = useNavigation();

  const [homeSectionListData, setHomeSectionListData] = useState<
    SectionListMetaData[]
  >(HOME_SECTIONLIST_DATA);

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

  console.log(homeSectionListData);

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
        return <AddStations onClose={onCloseAddStations} />;
      case HomeSectionListType.sportsPodcasts:
        return <View style={{ width: 100, height: 100 }} />;
      default:
        return <View />;
    }
  };

  const onCloseAddStations = () => {
    setTimeout(() => {
      setHomeSectionListData(
        homeSectionListData.filter(
          section => section.data[0].type !== HomeSectionListType.addStations,
        ),
      );
    }, 300);
  };

  return (
    <View style={styles.rootContainer}>
      <SectionList
        sections={homeSectionListData}
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
