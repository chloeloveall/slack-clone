import * as actionTypes from "./types";

// user actions
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const clearUser = user => {
  return {
    type: actionTypes.CLEAR_USER,
    payload: {
      currentUser: user
    }
  };
};

// channel actions
export const setCurrentChannel = channel => {
  return {
    type: actionTypes.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  }
}
