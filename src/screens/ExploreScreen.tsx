/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ExploreCell, SearchBar } from '../components';

enum SectionListType {
  exclusiveMusicStations = 'exclusiveMusicStations',
  musicThatMoves = 'musicThatMoves',
  sportsForEveryFan = 'SportsForEveryFan',
  theNewsYouNeed = 'theNewsYouNeed',
  yourPassionsOurPodcasts = 'yourPassionsOurPodcasts',
}

interface SectionListData {
  id: string;
  type: SectionListType;
}

export const ExploreScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MaterialCommunityIcons
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
    <View style={styles.rootContainer}>
      <SearchBar
        placeholder={'Search station, city, genre, or podcast'}
        placeholderTextColor={'white'}
        underlineColorAndroid={'transparent'}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <SectionList
          sections={SECTIONLIST_DATA}
          keyExtractor={(item, index) => item.id + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }: { item: SectionListData }) => {
            switch (item.type) {
              case SectionListType.exclusiveMusicStations:
                return <ExploreCell label={'Exclusive Stations'} />;
              case SectionListType.musicThatMoves:
                return <ExploreCell label={'MUSIC'} />;
              case SectionListType.sportsForEveryFan:
                return <ExploreCell label={'SPORTS'} />;
              case SectionListType.theNewsYouNeed:
                return <ExploreCell label={'NEWS'} />;
              case SectionListType.yourPassionsOurPodcasts:
                return <ExploreCell label={'PODCASTSs'} />;
              default:
                return <View />;
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#120536',
  },
  header: {
    fontSize: 21,
    fontWeight: '700',
    paddingVertical: 20,
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
  },
});

const SECTIONLIST_DATA = [
  {
    title: 'Exclusive Music Stations',
    data: [
      {
        id: '0',
        type: SectionListType.exclusiveMusicStations,
      },
    ],
  },
  {
    title: 'Music That Moves',
    data: [
      {
        id: '1',
        type: SectionListType.musicThatMoves,
      },
    ],
  },
  {
    title: 'Sports for Every Fan',
    data: [
      {
        id: '2',
        type: SectionListType.sportsForEveryFan,
      },
    ],
  },
  {
    title: 'The News You Need',
    data: [
      {
        id: '3',
        type: SectionListType.theNewsYouNeed,
      },
    ],
  },
  {
    title: 'Your Passions Our Podcasts',
    data: [
      {
        id: '4',
        type: SectionListType.yourPassionsOurPodcasts,
      },
    ],
  },
];
