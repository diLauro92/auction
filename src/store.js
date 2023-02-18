import axios from "axios";
import {createStore} from "vuex";

const store = createStore({
    state: {
        cakes: [],
        filteredCakes: [],
        currentCake: {},
        allBets: [],
        currentBets: {}
    },
    getters: {
        allCakes: state => state.cakes,
        filteredCakes: state => state.filteredCakes,
        currentCake: state => state.currentCake,
        allBets: state => state.allBets,
        currentBets: state => state.currentBets
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
        },

        GET_ALL_BETS: (state, allBets) => {
            state.allBets = allBets
        },
        SET_CURRENT_BETS: (state, bets) => {
            state.currentBets = bets
        }
    },
    actions: {
        getCakes({commit}) {
            axios.get('/cakes.json').then(response => {
                commit('GET_CAKES', response.data)
            })
        },
        getAllBets({commit}) {
            axios.get('/bets.json').then(response => {
                commit('GET_ALL_BETS', response.data)
            })
        },
        filteredCakesAct({commit, state}, value) {
            const filtered = state.cakes.filter(function (cake) {
                return cake.active === value
            })
            commit('SET_FILTERED', filtered)
            console.log(filtered)
        },
        filteredCakesUser({commit, state}, value) {
            const filtered = state.cakes.filter(function (cake) {
                return cake.creator === value
            })
            commit('SET_FILTERED', filtered)
            console.log(filtered)
        },
        getCake({commit, state}, slug) {
            const cake = state.cakes.find(cake => cake.slug === slug)
            commit('SET_CAKE', cake)
        },
        getCurrentBets({commit, state}, auctionID) {
            const filteredBets = state.allBets.filter(function (bets){
                return bets.auctionID === auctionID
            })
            const sortFilterBets = filteredBets.sort((bet1, bet2) => bet1.amount < bet2.amount ? 1 : -1)
            commit('SET_CURRENT_BETS', sortFilterBets)
        }
    }
});

export default store;