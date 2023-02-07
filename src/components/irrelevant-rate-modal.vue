<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow modal-shadow-notification" @click.self="closeModal">
      <div class="modal modal-notification">
        <div class="modal-close" @click="closeModal">
          <img src="images/icon/close.png" alt="">
        </div>
        <div class="modal-container">
          <slot name="title">
            <h3 class="modal-title">Ваша ставка не актуальна</h3>
          </slot>
          <slot name="body">
            <p class="last-bet__title">Последняя ставка</p>
            <p class="last-bet__value">1 400&nbsp;₽</p>
            <div class="last-bet-step-panel cake-bet-step-panel">
              <button class="step-panel__min step-panel__btn" data-action="minus">-</button>
              <div class="step-panel__amount" data-action="amount">100</div>
              <button class="step-panel__plus step-panel__btn" data-action="plus">+</button>
            </div>
            <button class="btn">Сделать ставку</button>
            <p class="your-bet">Ваша ставка: 1 500&nbsp;₽</p>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "irrelevant-rate-modal",
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
      document.body.classList.remove('showModal')
    }
  }
}
</script>
