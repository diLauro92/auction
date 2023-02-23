<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow modal-shadow-notification" @click.self="closeModal">
      <div class="modal modal-notification text-notification-modal">
        <div class="modal-close" @click="closeModal">
          <img src="images/icon/close.png" alt="">
        </div>
        <div class="modal-container text-notification-container">
          <slot name="title">
            <h3 class="modal-title">{{ h3Text }}</h3>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal-notification",
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
  },
  props: {
    h3Text: {
      type: Array,
      default: () => []
    }
  },
}
</script>
