import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        foods: []
    },

    mutations: {
        addFood(state, { payload }) {
            state.foods.push(payload);
        },
        deleteFood(state, { index }) {
            state.foods.splice(index, 1);
        },
        editFood(state, { payload }) {
            state.foods[payload.index] = { name: payload.name, price: payload.price };
        }
    },

    actions: {
        addFood({ commit }, payload) {
            commit("addFood", { payload });
        },
        deleteFood({ commit }, index) {
            commit("deleteFood", { index });
        },
        editFood({ commit }, payload) {
            commit("editFood", { payload });
        }
    },

    getters: {
        foods: state => state.foods
    }
});