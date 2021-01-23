import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER, PASS } from '../../../constants/variables';

import { actions } from '../../../constants'
const { userAction } = actions

/**
 * LOGIN
 */

export const login = ({user, password}) => {
  return async (dispatch) => {
    dispatch({
      type: userAction.START_LOADING,
    });

    if (user === USER && password === PASS) {
      const currentSession = new Date().getTime().toString();
      AsyncStorage.setItem('sessionId', currentSession);
      dispatch({
        type: userAction.LOGIN_SUCCESSFULL,
        valid: true,
        sessionId: currentSession,
      });
    }

    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    dispatch({
      type: userAction.END_LOADING,
    });
  };
};

export const isLoggedIn = () => {
  return async (dispatch) => {
    const currentSessionId = await AsyncStorage.getItem('sessionId');
    if (currentSessionId) {
      dispatch({
        type: userAction.LOGIN_SUCCESSFULL,
        valid: true,
        sessionId: currentSessionId,
      });
      return;
    }

    dispatch({
      type: userAction.LOGOUT,
      valid: false,
    });
  };
};

export const logout = () => {
  AsyncStorage.removeItem('sessionId');
  return {
    type: userAction.LOGOUT,
    valid: false,
  };
};
