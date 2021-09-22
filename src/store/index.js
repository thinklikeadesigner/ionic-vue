import { createStore } from "vuex";
import axios from "axios";
import CreatureModel from "../components/models/CreatureModel.js";

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://boiling-forest-75924.herokuapp.com"
//     : process.env.VUE_APP_LOCAL_URL;

const apiUrl = process.env.VUE_APP_API_URL;

console.log(apiUrl);

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
    /**
     * sets the status to loading
     * @param {*} state
     */
    auth_request(state) {
      state.status = "loading";
    },
    /**
     * sets the status to success, sets the token, sets the user
     * @param {*} state
     * @param {*} token
     * @param {*} user
     */
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    /**
     * sets the status to error
     * @param {*} state
     */
    auth_error(state) {
      state.status = "error";
    },
    /**
     * resets status and token to ""
     * @param {*} state
     */
    logout(state) {
      state.status = "";
      state.token = "";
    },
    /**
     * adds a new memory entry in memories, and sets the title, image, and description
     * @param {*} state
     * @param {*} memoryData
     */
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.image,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    },
    /**
     * sets the creatures in the store from the getCreatures action
     * @param {*} state
     * @param {*} creatures
     */
    SET_CREATURES(state, creatures) {
      state.creatures = creatures;
    },
    /**
     * sets an individual creature from the getCreature action
     * @param {*} state
     * @param {*} creature
     */
    SET_CREATURE(state, creature) {
      state.creature = creature;
    }
  },
  actions: {
    /**
     * logs the user in, and saves token in local storage
     * @param {*} {commit}
     * @param {*} user
     * @returns void
     */
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://boiling-forest-75924.herokuapp.com" + "/signin",
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
    /**
     * registers a new user and sets the token in local storage
     * @param {*} param0
     * @param {*} user
     * @returns void
     */
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://boiling-forest-75924.herokuapp.com" + "/signup",
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
    /**
     * logs the user out, and removes token from local storage
     * @param {*} param0
     * @returns void
     */
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    /**
     * commits a mutation to add to memories
     * @param {*} context
     * @param {*} memoryData
     */
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
    /**
     * gets the creatures from the api service, and maps each response to the CreatureModel
     * commits the creature list mutation
     * @param {*} commit
     */
    getCreatures({ commit }) {
      axios
        .get(process.env.VUE_APP_API_URL)
        .then(response => {
          commit(
            "SET_CREATURES",
            response.data.map(creature => new CreatureModel(creature))
          );
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    /**
     *
     *  gets a specific creature from the api service, and creates a new CreatureModel instance from it
     * commits the creature mutation
     * @param {*} commit
     * @param {*} id
     */
    getCreature({ commit }, id) {
      axios
        .get(`https://acnhapi.com/v1a/sea/${id}`)
        .then(response => {
          // data filtered through model class for creature
          commit("SET_CREATURE", new CreatureModel(response.data));
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  },
  getters: {
    /**
     * checks if there's a token in local storage
     * @param {*} state
     * @returns bool
     */
    isLoggedIn: state => !!state.token,
    /**
     * gets status
     * @param {*} state
     * @returns status
     */
    authStatus: state => state.status,
    /**
     * gets the list of memories
     * @param {*} state
     * @returns state.memories object
     */
    memories(state) {
      return state.memories;
    },
    /**
     * returns a memory that matches the id from the route params
     * @param {*} state
     * @returns memory
     */
    memory(state) {
      return memoryId => {
        return state.memories.find(memory => memory.id === memoryId);
      };
    },
    /**
     * gets the list of creatures from the store
     * @param {*} state
     * @returns creatures
     */
    creatures(state) {
      return state.creatures;
    },
    /**
     * gets a creature that matches the route params
     * @param {*} state
     * @returns creature
     */
    creature(state) {
      return state.creature;
    }
  }
});

export default store;
