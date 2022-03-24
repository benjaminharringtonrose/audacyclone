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
        style={[
          styles.buttonContainer,
          { borderTopColor: noTopBorder ? undefined : colors.secondary },
        ]}
        onPress={() => onPress()}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.buttonValue}>{value}</Text>
          <AntDesign name={'right'} color={colors.white} size={20} />
        </View>
      </TouchableOpacity>
    );
  } else if (type === 'switch' && typeof value === 'boolean') {
    return (
      <View
        style={[
          styles.switchContainer,
          { borderTopColor: noTopBorder ? undefined : colors.secondary },
        ]}>
        <Text style={styles.switchTitle}>{title}</Text>
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

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomColor: colors.secondary,
    borderWidth: StyleSheet.hairlineWidth,
  },
  switchContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.secondary,
    borderWidth: StyleSheet.hairlineWidth,
  },
  buttonTitle: {
    flex: 1,
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  switchTitle: {
    color: colors.white,
    fontWeight: '700',
  },
  buttonValue: {
    marginRight: 10,
    color: colors.white,
    fontSize: 13,
  },
});
