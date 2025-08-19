// utils/auth.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'userToken';

/**
 * Сохраняет токен авторизации
 */
export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Ошибка при сохранении токена:', error);
  }
};

/**
 * Получает токен авторизации
 */
export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Ошибка при получении токена:', error);
    return null;
  }
};

/**
 * Удаляет токен (выход из аккаунта)
 */
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Ошибка при удалении токена:', error);
  }
};

/**
 * Проверяет, авторизован ли пользователь
 */
export const isAuthenticated = async () => {
  const token = await getToken();
  return !!token;
};
