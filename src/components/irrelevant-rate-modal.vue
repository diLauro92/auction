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
            <p>Последняя ставка</p>
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
