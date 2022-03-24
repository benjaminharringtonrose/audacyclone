import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../constants';

interface SettingProps {
  title: string;
  value?: string | boolean;
  type: 'button' | 'switch';
  onPress: (value?: boolean) => void;
  noTopBorder?: boolean;
}

export const Setting = ({
  title,
  value,
  type,
  onPress,
  noTopBorder,
}: SettingProps) => {
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
  } else if (type === 'switch' && typeof value === 'boolean') {
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
