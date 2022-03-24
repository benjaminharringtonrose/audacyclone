/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootContainer } from '../components/RootContainer';
import { colors } from '../constants';

export const PlayerScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <AntDesign
              name={'down'}
              size={20}
              color={'white'}
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        );
      },
    });
  }, []);
  return (
    <RootContainer
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 60,
        justifyContent: 'center',
      }}>
      <>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 200,
          }}>
          <FontAwesome name={'music'} size={80} color={'white'} />
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 17,
              textAlign: 'center',
              paddingTop: 25,
            }}>
            {'Select a podcast or radio station to use player.'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            name={'stepbackward'}
            size={40}
            color={'white'}
            style={{}}
          />
          <AntDesign
            name={'play'}
            size={40}
            color={'white'}
            style={{ paddingHorizontal: 20 }}
          />
          <AntDesign name={'stepforward'} size={40} color={'white'} />
        </View>
      </>
    </RootContainer>
  );
};
