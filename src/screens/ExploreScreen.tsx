import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { RectangleCell, SearchBar } from '../components';
import { RootContainer } from '../components/RootContainer';
import { colors, EXPLORE_SECTIONLIST_DATA } from '../constants';
import { ExploreSectionListData, ExploreSectionListType } from '../types';

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
    <RootContainer style={styles.rootContainer}>
      <>
        <SearchBar
          placeholder={'Search station, city, genre, or podcast'}
          placeholderTextColor={'white'}
          underlineColorAndroid={'transparent'}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <SectionList
            sections={EXPLORE_SECTIONLIST_DATA}
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderItem={({ item }: { item: ExploreSectionListData }) => {
              switch (item.type) {
                case ExploreSectionListType.exclusiveMusicStations:
                  return <RectangleCell label={'Exclusive Stations'} />;
                case ExploreSectionListType.musicThatMoves:
                  return <RectangleCell label={'MUSIC'} />;
                case ExploreSectionListType.sportsForEveryFan:
                  return <RectangleCell label={'SPORTS'} />;
                case ExploreSectionListType.theNewsYouNeed:
                  return <RectangleCell label={'NEWS'} />;
                case ExploreSectionListType.yourPassionsOurPodcasts:
                  return <RectangleCell label={'PODCASTSs'} />;
                default:
                  return <View />;
              }
            }}
          />
        </View>
      </>
    </RootContainer>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.primary,
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
