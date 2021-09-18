import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "1",
          image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Trip to Mountains",
          description: "It was a really nice trip"
        },
        {
          id: "2",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Surfing the seaside",
          description: "The waves were huge"
        },
        {
          id: "3",
          image:
            "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Good eating",
          description: "The fish was wonderful"
        }
      ],
      things: []
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.image,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    },
    SET_THINGS(state, things) {
      state.things = things;
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
    getThings({ commit }) {
      axios
        .get("https://acnhapi.com/v1a/sea")
        .then(response => {
          console.log(response.data);
          commit("SET_THINGS", response.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return memoryId => {
        return state.memories.find(memory => memory.id === memoryId);
      };
    },
    things(state) {
      return state.things;
    },
    thing(state) {
      return thingId => {
        return state.things.find(thing => thing.id === thingId);
      };
    }
  }
});

export default store;
