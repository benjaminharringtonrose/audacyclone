import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/types';

type NavigationProp = StackNavigationProp<MainStackParamList, 'PlayerScreen'>;

export const PlayerScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <AntDesign
              name={'down'}
              size={20}
              color={colors.white}
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <FontAwesome name={'music'} size={80} color={colors.white} />
        <Text style={styles.bodyText}>
          {'Select a podcast or radio station to use player.'}
        </Text>
      </View>
      <View style={styles.player}>
        <AntDesign
          name={'stepbackward'}
          size={40}
          color={colors.white}
          onPress={() => {}}
          style={{}}
        />
        <AntDesign
          name={'play'}
          size={40}
          color={colors.white}
          onPress={() => {}}
          style={{ paddingHorizontal: 20 }}
        />
        <AntDesign
          name={'stepforward'}
          size={40}
          color={colors.white}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 60,
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  bodyText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 25,
  },
  player: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
