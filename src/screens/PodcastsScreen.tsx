import { useNavigation } from '@react-navigation/native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';
import { CircleList, RectangleCell, SquareList } from '../components';
import { PodcastsSectionListData, PodcastsSectionListType } from '../types';
import {
  colors,
  EXPLORE_PODCASTS_DATA,
  NEW_PODCASTS_DATA,
  PODCASTS_SECTIONLIST_DATA,
} from '../constants';

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
            onPress={() => {}}
          />
        );
      },
    });
  }, []);

  const renderHeader = () => {
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
  };

  const renderItem = ({ item }: { item: PodcastsSectionListData }) => {
    switch (item.type) {
      case PodcastsSectionListType.explore:
        return <CircleList data={EXPLORE_PODCASTS_DATA} />;
      case PodcastsSectionListType.newSeries:
        return <RectangleCell label={''} />;
      case PodcastsSectionListType.newPodcasts:
        return <SquareList data={NEW_PODCASTS_DATA} />;
      case PodcastsSectionListType.bingeEpisodes:
        return <RectangleCell label={''} />;
      default:
        return <View />;
    }
  };

  return (
    <View style={styles.rootContainer}>
      {selectedIndex === 0 ? (
        <SectionList
          sections={PODCASTS_SECTIONLIST_DATA}
          keyExtractor={(item, index) => item.id + index}
          ListHeaderComponent={renderHeader}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          renderItem={renderItem}
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
          <View style={styles.noSubscribersBody}>
            <Image
              source={require('../../assets/podcast-button.jpg')}
              resizeMode={'contain'}
              style={styles.podcastButton}
            />
            <Text style={styles.noSubscribersTitle}>
              {'No Subscribed Podcasts'}
            </Text>
            <Text style={styles.noSubscribersDescription}>
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
  noSubscribersBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podcastButton: {
    width: 150,
    height: 150,
    borderRadius: 40,
  },
  noSubscribersTitle: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    marginVertical: 20,
  },
  noSubscribersDescription: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: 60,
  },
});
