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
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
        <li>
          <div class="cake-bets-list__item">
            <div class="bets-list-item-top">
              <div class="bets-list-item-person">
                <img src="/images/icon/profile.png" alt="img" class="avatar">
                <p class="person__name">Анна К.</p>
              </div>
              <div class="bets-list-item__time">7 минут назад</div>
            </div>
            <div class="bets-list-item__bet">
              1 400&nbsp;₽
            </div>
          </div>
        </li>
      </ul>
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
  methods: {
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    }
  }
}
</script>
