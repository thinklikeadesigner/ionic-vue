import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Trip to Mountains",
          description: "It was a really nice trip"
        },
        {
          id: "m2",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Surfing the seaside",
          description: "The waves were huge"
        },
        {
          id: "m3",
          image:
            "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Good eating",
          description: "The fish was wonderful"
        }
      ]
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
    }
  },
  actions: {
    // this is where I would do any async work
    addMemory(context, memoryData) {
      // if this was a real app, this is where I would reach out to a back end server and store the memory
      context.commit("addMemory", memoryData);
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
    }
  }
});

export default store;
