import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  HomeScreen,
  ExploreScreen,
  PodcastsScreen,
  SettingsScreen,
} from '../screens';
import { colors, images } from '../constants';
import { BottomTabParamList } from './types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const PlaceholderScreen = () => <View style={{ flex: 1 }} />;

export function HomeScreenTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarBackground: () => {
          return <Image source={images.bottomTabBackground} />;
        },
        headerStyle: {
          backgroundColor: colors.primary,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
        tabBarStyle: { borderTopWidth: 0 },
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => {
            return (
              <Image
                resizeMode={'contain'}
                source={images.audacityIcon}
                style={{ width: 35, height: 35, marginLeft: 10 }}
              />
            );
          },
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: colors.grey,
          tabBarActiveTintColor: colors.white,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={26}
              color={colors.white}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          headerTitleStyle: { color: colors.white, fontWeight: '700' },
          tabBarLabel: 'Explore',
          tabBarInactiveTintColor: colors.grey,
          tabBarActiveTintColor: colors.white,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesomeIcon name={'search'} size={26} color={colors.white} />
            ) : (
              <AntIcon name={'search1'} size={26} color={colors.white} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Placeholder"
        component={PlaceholderScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('PlayerScreen');
          },
        })}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesomeIcon name={'play'} size={24} color={colors.white} />
            ) : (
              <Feather name={'play'} size={24} color={colors.white} />
            ),
        }}
      />
      <BottomTab.Screen
        name="PodcastsScreen"
        component={PodcastsScreen}
        options={{
          title: 'Podcasts',
          headerTitleStyle: { color: colors.white, fontWeight: '700' },
          tabBarLabel: 'Podcasts',
          tabBarInactiveTintColor: colors.grey,
          tabBarActiveTintColor: colors.white,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Foundation name={'microphone'} size={32} color={colors.white} />
            ) : (
              <SimpleLineIcons
                name={'microphone'}
                size={26}
                color={colors.white}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerTitleStyle: { color: colors.white, fontWeight: '700' },
          tabBarLabel: 'Settings',
          tabBarInactiveTintColor: colors.grey,
          tabBarActiveTintColor: colors.white,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesomeIcon name={'gear'} size={26} color={colors.white} />
            ) : (
              <EvilIcons name={'gear'} size={26} color={colors.white} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
