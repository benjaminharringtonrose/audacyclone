/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';
import { CircleList, RectangleCell, SquareList } from '../components';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { colors } from '../constants';

enum SectionListType {
  explore = 'explore',
  newSeries = 'newSeries',
  newPodcasts = 'newPodcasts',
  bingeEpisodes = 'bingeEpisodes',
}

interface SectionListData {
  id: string;
  type: SectionListType;
}

export const PodcastsScreen = () => {
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    navigation.setOptions({
      title: 'Podcasts',
      headerRight: () => {
        return (
          <Icon
            name={'devices'}
            size={24}
            color={colors.white}
            style={{ marginRight: 10 }}
          />
        );
      },
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      {selectedIndex === 0 ? (
        <SectionList
          sections={SECTIONLIST_DATA}
          keyExtractor={(item, index) => item.id + index}
          ListHeaderComponent={() => {
            return (
              <SegmentedControl
                values={['DISCOVER', 'SUBSCRIPTIONS']}
                selectedIndex={selectedIndex}
                onChange={event => {
                  setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                style={{ backgroundColor: colors.secondary }}
                activeFontStyle={{ color: colors.white }}
                fontStyle={{ color: colors.white }}
                tintColor={colors.accent}
              />
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }: { item: SectionListData }) => {
            switch (item.type) {
              case SectionListType.explore:
                return <CircleList data={EXPLORE_PODCASTS_DATA} />;
              case SectionListType.newSeries:
                return <RectangleCell label={''} />;
              case SectionListType.newPodcasts:
                return <SquareList data={NEW_PODCASTS_DATA} />;
              case SectionListType.bingeEpisodes:
                return <RectangleCell label={''} />;
              default:
                return <View />;
            }
          }}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <SegmentedControl
            values={['DISCOVER', 'SUBSCRIPTIONS']}
            selectedIndex={selectedIndex}
            onChange={event => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
            style={{ backgroundColor: colors.secondary }}
            activeFontStyle={{ color: colors.white }}
            fontStyle={{ color: colors.white }}
            tintColor={colors.accent}
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../../assets/podcast-button.jpg')}
              resizeMode={'contain'}
              style={{ width: 150, height: 150, borderRadius: 40 }}
            />
            <Text
              style={{
                color: colors.white,
                fontWeight: '700',
                fontSize: 15,
                marginVertical: 20,
              }}>
              {'No Subscribed Podcasts'}
            </Text>
            <Text
              style={{
                color: colors.white,
                textAlign: 'center',
                marginHorizontal: 60,
              }}>
              {
                "Looks like you haven't subscribed to a podcast yet! Tap the subscribe button to add to your 'My Subscription' list."
              }
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 21,
    fontWeight: '700',
    paddingVertical: 10,
    color: colors.white,
  },
  title: {
    fontSize: 24,
  },
});

const SECTIONLIST_DATA = [
  {
    title: 'Explore Podcasts',
    data: [
      {
        id: '0',
        type: SectionListType.explore,
      },
    ],
  },
  {
    title: 'New Series from NPR',
    data: [
      {
        id: '1',
        type: SectionListType.newSeries,
      },
    ],
  },
  {
    title: 'New Podcasts on Audacy',
    data: [
      {
        id: '2',
        type: SectionListType.newPodcasts,
      },
    ],
  },
  {
    title: 'Binge All Episodes Now',
    data: [
      {
        id: '1',
        type: SectionListType.newSeries,
      },
    ],
  },
];

const EXPLORE_PODCASTS_DATA = [
  { id: '0', title: 'Art' },
  { id: '1', title: 'Business' },
  { id: '2', title: 'Comedy' },
  { id: '3', title: 'Education' },
  { id: '4', title: 'Entertainment' },
];

const NEW_PODCASTS_DATA = [
  { id: '0', title: 'Ultimate College', subtitle: 'Basketball...' },
  { id: '1', title: 'HBO Docs Club', subtitle: '' },
  { id: '2', title: 'Very Scary People', subtitle: '' },
  { id: '3', title: 'Best Friends Back, Alright!', subtitle: '' },
];
