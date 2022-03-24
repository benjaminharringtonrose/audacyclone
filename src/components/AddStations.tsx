import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const AddStations = ({ onClose }: { onClose: () => void }) => {
  const anim = useRef(new Animated.Value(0)).current;
  const opac = useRef(new Animated.Value(1)).current;

  const squish = () => {
    Animated.parallel([
      Animated.timing(anim, {
        toValue: 30,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opac, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
    onClose();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opac,
          transform: [
            {
              translateY: anim.interpolate({
                inputRange: [0, 40],
                outputRange: [0, -40],
              }),
            },
          ],
        },
      ]}>
      <TouchableOpacity style={styles.closeContainer} onPress={squish}>
        <Icon
          name={'close'}
          size={24}
          color={'grey'}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{'Add Your Favorite Stations'}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#062580',
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  textContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  closeIcon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  text: {
    color: '#ff6a00',
    fontWeight: '700',
    fontSize: 15,
  },
});
