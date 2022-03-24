/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
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
  PlayerScreen,
  PodcastsScreen,
  SettingsScreen,
} from '../screens';

const BottomTab = createBottomTabNavigator();

export function HomeScreenTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarBackground: () => {
          return (
            <Image source={require('../../assets/bottom-tab-background.png')} />
          );
        },
        headerStyle: {
          backgroundColor: '#120536',
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
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={26}
              color={'white'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          headerTitleStyle: { color: 'white', fontWeight: '700' },
          tabBarLabel: 'Explore',
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesomeIcon name={'search'} size={26} color={'white'} />
            ) : (
              <AntIcon name={'search1'} size={26} color={'white'} />
            ),
        }}
      />
      <BottomTab.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{
          title: '',
          tabBarLabel: 'Player',
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesomeIcon name={'play'} size={24} color={'white'} />
            ) : (
              <Feather name={'play'} size={24} color={'white'} />
            ),
        }}
      />
      <BottomTab.Screen
        name="PodcastsScreen"
        component={PodcastsScreen}
        options={{
          title: '',
          tabBarLabel: 'Podcasts',
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Foundation name={'microphone'} size={32} color={'white'} />
            ) : (
              <SimpleLineIcons name={'microphone'} size={26} color={'white'} />
            ),
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: '',
          tabBarLabel: 'Settings',
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesomeIcon name={'gear'} size={26} color={'white'} />
            ) : (
              <EvilIcons name={'gear'} size={26} color={'white'} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
