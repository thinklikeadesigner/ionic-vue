import { createStore } from "vuex";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://morning-paper.students.nomoreparties.site"
    : "http://localhost:3000";

const store = createStore({
  state() {
    return {
      status: "",
      token: localStorage.getItem("token") || "",
      user: {},
      memories: [
        {
          id: "0",
          image:
            "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
          title: "Octopus",
          description: "Found him by the boat"
        },
        {
          id: "1",
          image:
            "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/DSC_0993-Magic%20Dolphin.jpg?itok=VD7a_rue",
          title: "Dolphin",
          description: "Went to SeaWorld"
        },
        {
          id: "2",
          image:
            "https://images.unsplash.com/photo-1515555585025-54136276b6e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29yYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60",
          title: "Coral Reef",
          description: "Snapped this picture when I went surfing"
        }
      ],
      creatures: [],
      creature: {}
    };
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.image,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    },
    SET_THINGS(state, creatures) {
      state.creatures = creatures;
    },
    SET_CREATURE(state, creature) {
      state.creature = creature;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: baseUrl + "/signin",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: baseUrl + "/signup",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
    getCreatures({ commit }) {
      axios
        .get("https://acnhapi.com/v1a/sea")
        .then(response => {
          console.log(response.data);
          commit("SET_THINGS", response.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    getCreature({ commit }, id) {
      axios
        .get(`https://acnhapi.com/v1a/sea/${id}`)
        .then(response => {
          console.log(response.data);
          commit("SET_CREATURE", response.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return memoryId => {
        return state.memories.find(memory => memory.id === memoryId);
      };
    },
    creatures(state) {
      return state.creatures;
    },
    creature(state) {
      return state.creature;
    }
  }
});

export default store;
