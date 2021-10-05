import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {

    
    //To Set Users in state
    SET_USERS(state, users) {
      if (users) {
        state.users = users;
      }
    },
  },
  actions: {
    // Action To get Data from Fake Json Server
    getUsers: async ({commit }) => {
      try {
        await axios.get("http://localhost:3000/users").then((response) => {
          console.log("Get Response", response);
          commit("SET_USERS", response.data);
        });
      } catch (e) {
        console.log("Error", e);
      }
    },
  },
  modules: {},
});
