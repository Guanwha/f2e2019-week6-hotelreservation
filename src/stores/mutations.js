import * as types from './mutation_types';


export const mutations = {
  // payload is rooms array (include id, imageUrl, normalDayPrice, holidayPrice, name)
  [types.GET_ROOMS](state, payload) {
    if (payload) {
      state.roomsIntro = payload;
    }
  },
  [types.GET_ROOM](state, payload) {
    if (payload) {
      state.roomDetail = payload.room;
      state.roomBooking = payload.booking;
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
  roomDetail: {               // detail information of queried room
    imageUrl: [],
    descriptionShort: {
      Bed: [],
    },
    checkInAndOut: {},
    amenities: {},
  },
  roomBooking: null,          // booking list of queried room
  lastErrorMessage: null,     // include action, errMessage
};
