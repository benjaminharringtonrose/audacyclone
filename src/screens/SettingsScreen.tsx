/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../constants';

export const SettingsScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}>
      <Text style={{ color: colors.white }}>
        {'Audacy App Version 13.2.1.'}
      </Text>
      <SectionTitle title={'Audio Settings'} />
      <Text style={{ color: colors.white, fontSize: 13, marginBottom: 10 }}>
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
      <Text style={{ color: colors.white, fontSize: 13, marginBottom: 10 }}>
        {'Selected Market: National'}
      </Text>
      <Setting
        title={'Change Location'}
        value={''}
        type={'button'}
        onPress={() => {}}
      />
      <SectionTitle title={'Manage Favorites'} />
      <Text style={{ color: colors.white, fontSize: 13, marginBottom: 10 }}>
        {'Re-organize or delete stations from your favorites or recents.'}
      </Text>
      <Setting
        title={'Manage My Favorites'}
        value={''}
        type={'button'}
        onPress={() => {}}
      />
      <Text
        style={{ color: colors.accent, fontWeight: '800', marginVertical: 15 }}>
        {'Clear my Recent Stations History'}
      </Text>
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
      <Text style={{ color: colors.white, marginBottom: 10, fontSize: 13 }}>
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

const Setting = ({
  title,
  value,
  type,
  onPress,
  noTopBorder,
}: {
  title: string;
  value?: string | boolean;
  type: 'button' | 'switch';
  onPress: (value?: boolean) => void;
  noTopBorder?: boolean;
}) => {
  if (type === 'button') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          borderTopColor: noTopBorder ? undefined : colors.secondary,
          borderBottomColor: colors.secondary,
          borderWidth: StyleSheet.hairlineWidth,
        }}
        onPress={() => onPress()}>
        <Text
          style={{
            flex: 1,
            color: colors.white,
            fontWeight: '700',
            fontSize: 15,
          }}>
          {title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 10, color: colors.white, fontSize: 13 }}>
            {value}
          </Text>
          <AntDesign name={'right'} color={colors.white} size={20} />
        </View>
      </TouchableOpacity>
    );
  } else if (type === 'switch' && typeof value == 'boolean') {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopColor: noTopBorder ? undefined : colors.secondary,
          borderBottomColor: colors.secondary,
          borderWidth: StyleSheet.hairlineWidth,
        }}>
        <Text style={{ color: colors.white, fontWeight: '700' }}>{title}</Text>
        <Switch
          value={value}
          onValueChange={value => onPress(value)}
          trackColor={{ false: '#767577', true: colors.accent }}
          thumbColor={colors.white}
          ios_backgroundColor={colors.white}
        />
      </View>
    );
  } else {
    return null;
  }
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 10,
      }}>
      <Text style={{ color: colors.white, fontSize: 21, fontWeight: '700' }}>
        {title}
      </Text>
    </View>
  );
};
