import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.warn(error.message);
  }
};

export const getString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    }
  } catch (error) {
    console.warn(error.message);
  }
};
