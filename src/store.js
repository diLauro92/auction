import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        cakes: [],
        filteredCakes: [],
        currentCake: {}
    },
    getters: {
        allCakes: state => state.cakes,
        filteredCakes: state => state.filteredCakes,
        currentCake: state => state.currentCake
    },
    mutations: {
        GET_CAKES: (state, cakes) => {
            state.cakes = cakes
        },

        SET_FILTERED: (state, cakes) => {
            state.filteredCakes = cakes
        },

        SET_CAKE: (state, cake) => {
            state.currentCake = cake
        }
    },
    actions: {
        getCakes({ commit }) {
            axios.get('/cakes.json').then(response => {
                commit('GET_CAKES', response.data)
            })
        },
        filteredCakesAct({ commit, state }, value) {
            const filtered = state.cakes.filter(function (cake) {
                return cake.active === value
            })
           commit('SET_FILTERED', filtered)
            console.log(filtered)
        },
        filteredCakesUser({ commit, state }, value) {
            const filtered = state.cakes.filter(function (cake) {
                return cake.creator === value
            })
            commit('SET_FILTERED', filtered)
            console.log(filtered)
        },
        getCake({ commit, state }, slug) {
            const cake = state.cakes.find(cake => cake.slug === slug)
            commit('SET_CAKE', cake)
        }
    }
});

export default store;