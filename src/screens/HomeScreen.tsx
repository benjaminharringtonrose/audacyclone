import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AddStations, CircleList, SquareList } from '../components';
import { HomeData, HomeListType } from '../types';
import {
  colors,
  FAVORITES_DATA,
  HOME_DATA,
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

  const [homeData, setHomeData] = useState<HomeData[]>(HOME_DATA);

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

  console.log(homeData);

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

  const renderItem = ({ item }: { item: HomeData }) => {
    switch (item.type) {
      case HomeListType.discover:
        return (
          <>
            <Text style={styles.header}>{item.title}</Text>
            <CircleList data={FAVORITES_DATA} />
          </>
        );
      case HomeListType.stations:
        return (
          <>
            <Text style={styles.header}>{item.title}</Text>
            <SquareList data={STATIONS_DATA} />
          </>
        );
      case HomeListType.music:
        return (
          <>
            <Text style={styles.header}>{item.title}</Text>
            <SquareList data={MUSIC_STATIONS_DATA} />
          </>
        );
      case HomeListType.addStations:
        return <AddStations onClose={onCloseAddStations} />;
      case HomeListType.sportsPodcasts:
        return <Text style={styles.header}>{item.title}</Text>;
      default:
        return <View />;
    }
  };

  const onCloseAddStations = () => {
    setTimeout(() => {
      setHomeData(
        homeData.filter(data => data.type !== HomeListType.addStations),
      );
    }, 200);
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={homeData}
        keyExtractor={(item, index) => item.id + index}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
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
