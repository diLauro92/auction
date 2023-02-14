import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        cakes: [],
        filteredCakes: []
    },
    getters: {
        allCakes: state => state.cakes,
        filteredCakes: state => state.filteredCakes
    },
    mutations: {
        GET_CAKES: (state, cakes) => {
            state.cakes = cakes
        },

        SET_FILTERED: (state, cakes) => {
            state.filteredCakes = cakes
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
        }
    }
});

export default store;