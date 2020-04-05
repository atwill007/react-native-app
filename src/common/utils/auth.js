import {getItem, setItem} from './storage'

const authDict = {
  USER_INFO: 'userInfo'
}

export const getUserInfo = async () => {
  const val = await getItem(authDict.USER_INFO)
  return val || null
}

export const setUserInfo = async (val) => {
  return await setItem(authDict.USER_INFO, val)
}

