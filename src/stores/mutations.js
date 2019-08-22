import * as types from './mutation_types';


export const mutations = {
  // payload is rooms array (include id, imageUrl, normalDayPrice, holidayPrice, name)
  [types.GET_ROOMS](state, payload) {
    if (payload) {
      state.roomsIntro = payload;
    }
  },
  // payload is error object (include action, errMessage)
  [types.UPDATE_ERR](state, payload) {
    if (payload) {
      state.lastErrorMessage = payload;
    }
  },
};

export const state = {
  roomsIntro: [],             // introduction of all rooms
  roomsDetail: [],            // detail information of all rooms
  lastErrorMessage: null,     // include action, errMessage
};
