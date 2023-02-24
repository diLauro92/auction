<template>
  <div class="shop-item-filling info-block-with-img">
        <img
            :src="currentFilling.img"
            class="shop-item-filling__img"
        >
        <p class="shop-item-filling__text">
          Начинка: {{ currentFilling.name }}
        </p>
  </div>
</template>

<script>
export default {
  name: "auction-item-filling",
  props: {
    cake: {
      type: Object,
      default: () => {
      }
    },
    fillingsList: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    currentFilling: function () {
      let currentFill = this.fillingsList.find(filling => filling.id === this.cake.filling)
      if (currentFill) {
        return currentFill
      } else {
        return ""
      }
    }
  }
}
</script>
