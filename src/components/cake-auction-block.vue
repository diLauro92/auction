<template>
  <div class="cake-bets-container">
    <div class="cake-bets-left">
      <div class="cake-bet-title cake-bets-container__title">Сделать ставку</div>
      <p class="cake-bet-step__title">Шаг</p>
      <div class="cake-bet-step-panel">
        <button class="step-panel__min step-panel__btn" data-action="minus">-</button>
        <div class="step-panel__amount" data-action="amount">100</div>
        <button class="step-panel__plus step-panel__btn" data-action="plus">+</button>
      </div>
      <p class="cake-your-bet-title">
        Ваша ставка:
      </p>
      <div class="cake-your-bet">
        1 500&nbsp;Р
      </div>
      <button
          class="btn cake-action-btn"
          data-action="bet"
          @click="showModal"
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
    }
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    }
  }
}
</script>
