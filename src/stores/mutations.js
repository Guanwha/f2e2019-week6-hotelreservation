import * as types from './mutation_types';


export const mutations = {
  // payload is rooms array (include id, imageUrl, normalDayPrice, holidayPrice, name)
  [types.GET_ROOMS](state, payload) {
    if (payload) {
      state.roomsIntro = payload;
    }
  },
};

export const state = {
  roomsIntro: [],             // introduction of all rooms
  roomsDetail: [],            // detail information of all rooms
};
