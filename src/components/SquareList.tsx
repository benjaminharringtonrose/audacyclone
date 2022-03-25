import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../constants';

interface SquareListData {
  id: string;
  title: string;
  subtitle: string;
}

interface SquareListProps {
  data: SquareListData[];
  iconTopLeft?: () => JSX.Element;
  iconBottomRight?: () => JSX.Element;
}

export const SquareList = (props: SquareListProps) => {
  const { data, iconTopLeft, iconBottomRight } = props;
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.textContainer}>
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                {!!iconTopLeft && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <View style={{ paddingLeft: 5, paddingTop: 5 }}>
                      {iconTopLeft()}
                    </View>
                  </View>
                )}
                {!!iconBottomRight && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}>
                    <View style={{ marginRight: 5, marginBottom: 5 }}>
                      {iconBottomRight()}
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 7 },
  textContainer: {
    width: 120,
    height: 120,
    backgroundColor: colors.grey,
  },
  title: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    width: 120,
  },
  subtitle: {
    color: colors.white,
  },
});
