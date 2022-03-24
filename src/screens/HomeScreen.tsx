/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';
import { AddStations, CircleList, SquareList } from '../components';
import { RootContainer } from '../components/RootContainer';
import { colors } from '../constants';

enum SectionListType {
  discover = 'discover',
  stations = 'stations',
  music = 'music',
  addStations = 'addStations',
  sportsPodcasts = 'sportsPodcasts',
}

interface SectionListData {
  id: string;
  type: SectionListType;
}

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => {
        return (
          <Image
            resizeMode={'contain'}
            source={require('../../assets/audacy-icon.jpg')}
            style={{ width: 35, height: 35, marginLeft: 10 }}
          />
        );
      },
      headerRight: () => {
        return (
          <Icon
            name={'devices'}
            size={24}
            color={'white'}
            style={{ marginRight: 10 }}
          />
        );
      },
    });
  }, []);

  return (
    <RootContainer style={styles.rootContainer}>
      <>
        <SectionList
          sections={SECTIONLIST_DATA}
          keyExtractor={(item, index) => item.id + index}
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: 19,
                      marginBottom: 5,
                      paddingLeft: 10,
                    }}>
                    {'Elevate your experience'}
                  </Text>
                  <Text
                    style={{
                      color: '#ff9f59',
                      fontWeight: '700',
                      marginHorizontal: 30,
                      fontSize: 12,
                    }}>
                    {
                      'Customize your homepage by adding your favorite stations below'
                    }
                  </Text>
                </View>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }: { item: SectionListData }) => {
            switch (item.type) {
              case SectionListType.discover:
                return <CircleList data={FAVORITES_DATA} />;
              case SectionListType.stations:
                return <SquareList data={STATIONS_DATA} />;
              case SectionListType.music:
                return <SquareList data={MUSIC_STATIONS_DATA} />;
              case SectionListType.addStations:
                return <AddStations />;
              case SectionListType.sportsPodcasts:
                return <View style={{ width: 100, height: 100 }} />;
              default:
                return <View />;
            }
          }}
        />
      </>
    </RootContainer>
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 21,
    fontWeight: '700',
    paddingVertical: 10,
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
  },
});

const SECTIONLIST_DATA = [
  {
    title: 'Discover Your Favorites',
    data: [
      {
        id: '0',
        type: SectionListType.discover,
      },
    ],
  },
  {
    title: 'Your City, Your Stations',
    data: [
      {
        id: '1',
        type: SectionListType.stations,
      },
    ],
  },
  {
    title: 'Featured Music Stations',
    data: [
      {
        id: '2',
        type: SectionListType.music,
      },
    ],
  },
  {
    data: [
      {
        id: '3',
        type: SectionListType.addStations,
      },
    ],
  },
  {
    title: 'Reccomended Sports Podcasts',
    data: [
      {
        id: '4',
        type: SectionListType.sportsPodcasts,
      },
    ],
  },
];

const FAVORITES_DATA = [
  { id: '0', title: 'Exclusive Stations' },
  { id: '1', title: 'Music' },
  { id: '2', title: 'Sports' },
  { id: '3', title: 'News & Talk' },
  { id: '4', title: 'Podcasts' },
];

const STATIONS_DATA = [
  { id: '0', title: 'CBS Sports Radio', subtitle: 'CBS Sports Radio' },
  { id: '1', title: 'CNN', subtitle: 'The Most Trusted..' },
  { id: '2', title: 'HLN', subtitle: 'News that hits ho..' },
  { id: '3', title: 'CNN Español', subtitle: 'El nombre mas c..' },
];

const MUSIC_STATIONS_DATA = [
  { id: '0', title: 'She Sings', subtitle: 'Celebrating the p..' },
  { id: '1', title: 'Justin Beiber Radio', subtitle: 'Listen up if you lo..' },
  { id: '2', title: 'Women that Rock', subtitle: 'Women that Rock' },
];
