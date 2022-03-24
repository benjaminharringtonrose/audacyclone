import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Setting } from '../components';
import { SectionTitle } from '../components/SectionTitle';
import { colors } from '../constants';

export const SettingsScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <Text style={{ color: colors.white }}>
        {'Audacy App Version 13.2.1.'}
      </Text>
      <SectionTitle title={'Audio Settings'} />
      <Text style={styles.smallText}>
        {
          'Disabled autoplay to stop playing your recently played station automatically when you launch the app.'
        }
      </Text>
      <Setting
        title={'Disable Autoplay'}
        value={false}
        type={'switch'}
        onPress={() => {}}
      />
      <SectionTitle title={'Location Settings'} />
      <Text style={styles.smallText}>{'Selected Market: National'}</Text>
      <Setting
        title={'Change Location'}
        value={''}
        type={'button'}
        onPress={() => {}}
      />
      <SectionTitle title={'Manage Favorites'} />
      <Text style={styles.smallText}>
        {'Re-organize or delete stations from your favorites or recents.'}
      </Text>
      <Setting
        title={'Manage My Favorites'}
        value={''}
        type={'button'}
        onPress={() => {}}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            color: colors.accent,
            fontWeight: '800',
            marginVertical: 15,
          }}>
          {'Clear my Recent Stations History'}
        </Text>
      </TouchableOpacity>
      <SectionTitle title={'Notification Settings'} />
      <Setting
        title={'All Notifications'}
        value={true}
        type={'switch'}
        onPress={() => {}}
      />
      <Setting
        title={'Favorite Station Notifications'}
        value={''}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <SectionTitle title={'Podcast Settings'} />
      <Setting
        title={'Download Using Cellular Data'}
        value={false}
        type={'switch'}
        onPress={() => {}}
      />
      <Text style={{ color: colors.white, fontSize: 13 }}>
        {'Recommended setting: Off'}
      </Text>
      <Text style={styles.smallText}>
        {'Audacy will download podcasts on Wi-Fi only by default.'}
      </Text>
      <Setting
        title={'Playback Speed'}
        value={'1.0x'}
        type={'button'}
        onPress={() => {}}
      />
      <Setting
        title={'Auto-download Episodes'}
        value={true}
        type={'switch'}
        onPress={() => {}}
        noTopBorder
      />
      <Setting
        title={'Refresh Every'}
        value={'6 Hours'}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <Setting
        title={'Limit Episodes'}
        value={'Most Recent'}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <Setting
        title={'Delete Played Episodes'}
        value={true}
        type={'switch'}
        onPress={() => {}}
        noTopBorder
      />
      <SectionTitle title={'Other Settings'} />
      <Setting
        title={'Alarm Clock'}
        value={''}
        type={'button'}
        onPress={() => {}}
      />
      <Setting
        title={'Sleep Timer'}
        value={''}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <SectionTitle title={'Help and Information'} />
      <Setting
        title={'Help Center'}
        value={''}
        type={'button'}
        onPress={() => {}}
      />
      <Setting
        title={'Contact Support'}
        value={''}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <Setting
        title={'Rate This App'}
        value={''}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <Setting
        title={'Terms of Use'}
        value={''}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
      <Setting
        title={'Privacy Policy'}
        value={''}
        type={'button'}
        onPress={() => {}}
        noTopBorder
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  smallText: {
    color: colors.white,
    fontSize: 13,
    marginBottom: 10,
  },
});
