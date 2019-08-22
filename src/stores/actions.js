import axios from 'axios';
import * as types from './mutation_types';

const actions = {
  getRooms: ({ commit }) => {
    // [API] get all rooms
    axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
      headers: {
        Authorization: process.env.API_TOKEN,
        accept: 'application/json',
      },
    }).then((response) => {
      if (response && response.data && response.data.success === true) {
        // call mutation
        commit(types.GET_ROOMS, response.data.items);
      }
    }).catch((err) => {
      console.log(err);
    });
  },
};

export default actions;
