<template>
  <div class="cake-bets-container">
    <div class="cake-bets-left">
      <div class="cake-bet-title cake-bets-container__title">Сделать ставку</div>
      <p class="cake-bet-step__title">Шаг</p>
      <div class="cake-bet-step-panel">
        <button
            v-on:click="decreaseBet"
            class="step-panel__min step-panel__btn"
            data-action="minus"
        >
          -
        </button>
        <div
            class="step-panel__amount"
            data-action="amount"
            ref="step_amount"
            :data-amount=currentCakeInfo.minStep
        >
          {{ currentCakeInfo.minStep }}
        </div>
        <button
            v-on:click="increaseBet()"
            class="step-panel__plus step-panel__btn"
            data-action="plus"
        >
          +
        </button>
      </div>
      <p class="cake-your-bet-title">
        Ваша ставка:
      </p>
      <div
          ref="resultBet"
          :data-bet-amount=getMinBet()
          class="cake-your-bet">
        {{ getMinBet() }} {{ currentCakeInfo.currency }}
      </div>
      <button
          class="btn cake-action-btn"
          data-action="bet"
          @click="makeNewBet"
      >
        Сделать ставку
      </button>
    </div>
    <div class="cake-bets-right">
      <div class="cake-bets-history_title cake-bets-container__title">История ставок</div>
      <ul class="cake-bets-list">
        <li
            v-for="(item, index) in currentBets"
            :key="index"
        >
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img
                    :src="item.avatar"
                    alt="img"
                    class="avatar"
                >
                <p class="person__name">{{ item.userName }}</p>
              </div>
              <div class="bets-list-item__time">{{ item.created }}</div>
            </div>
            <div class="bets-list-item__bet">
              {{ item.amount }}&nbsp;{{ item.currency }}
            </div>
          </div>
        </li>
      </ul>
      <p
          v-if="!currentBets.length"
          class="notification-bets"
      >
        Пока не было сделано ни одной ставки
      </p>
    </div>
  </div>
  <irrelevant-rate-modal ref="modal"/>
</template>


<script>

import IrrelevantRateModal from './irrelevant-rate-modal'

export default {
  name: "cake-action-block",
  components: {
    IrrelevantRateModal
  },
  props: {
    currentBets: {
      type: Array,
      default: () => []
    },
    currentCakeInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      currentUser:
          {
            id: 11,
            userName: "Username L.",
            avatar: '/images/icon/profile.png',
            created: '1 минуту назад',
            amount: 0,
            auctionID: 0,
            currency: "₽"
          }
    }
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    },
    getMinBet: function () {
      let arrLen = this.currentBets.length
      if (arrLen !== 0) {
        for (let i = 0; i < this.currentBets.length; i++) {
          return (this.currentCakeInfo.minStep + this.currentBets[0].amount)
        }
      } else {
        return (this.currentCakeInfo.startBet)
      }
    },
    increaseBet: function () {
      let currentStep = this.$refs.step_amount.getAttribute('data-amount')
      let currentBet = this.$refs.resultBet.getAttribute('data-bet-amount')
      let newStep = Number(currentStep) + this.currentCakeInfo.minStep
      let newBet = Number(currentBet) + this.currentCakeInfo.minStep
      this.$refs.step_amount.innerText = newStep.toString()
      this.$refs.resultBet.innerText = newBet.toString() + " " + this.currentCakeInfo.currency
      this.$refs.step_amount.setAttribute('data-amount', newStep)
      this.$refs.resultBet.setAttribute('data-bet-amount', newBet)
    },
    decreaseBet: function () {
      let currentStep = this.$refs.step_amount.getAttribute('data-amount')
      let currentBet = this.$refs.resultBet.getAttribute('data-bet-amount')
      let newStep
      let newBet
      if (Number(currentStep > this.currentCakeInfo.minStep)) {
        newStep = Number(currentStep) - this.currentCakeInfo.minStep
        newBet = Number(currentBet) - this.currentCakeInfo.minStep
      } else {
        newStep = Number(currentStep)
        newBet = Number(currentBet)
      }
      this.$refs.step_amount.innerText = newStep.toString()
      this.$refs.step_amount.setAttribute('data-amount', newStep)
      this.$refs.resultBet.innerText = newBet.toString() + " " + this.currentCakeInfo.currency
      this.$refs.resultBet.setAttribute('data-bet-amount', newBet)
    },
    makeNewBet: function () {
      let currentBet = this.$refs.resultBet.getAttribute('data-bet-amount')
      let updateCurrentBets = this.currentBets
      let userMakeBet = this.currentUser
      userMakeBet.auctionID = this.currentCakeInfo.id
      userMakeBet.id = userMakeBet.id + 1
      userMakeBet.amount = Number(currentBet)
      updateCurrentBets.push(userMakeBet)
      updateCurrentBets.sort((bet1, bet2) => bet1.amount < bet2.amount ? 1 : -1)
      this.$refs.step_amount.innerText = this.currentCakeInfo.minStep.toString()
      this.$refs.step_amount.setAttribute('data-amount', this.currentCakeInfo.minStep)
    }
  }
}
</script>
