import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key, value) => {
  try {
    if (typeof value === 'object') value = JSON.stringify(value)
    return await AsyncStorage.setItem(key, value)
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch(e) {
    return Promise.reject(e)
  }
}

export const removeItem = async (key) => {
  try {
    return await AsyncStorage.removeItem(key)
  } catch(e) {
    return Promise.reject(e)
  }
}
