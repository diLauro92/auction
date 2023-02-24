<template>
  <div class="container">
    <div class="cake-content">
      <div class="cake-content-images">
        <cake-slider :cake-info="currentCakeInfo"/>
      </div>
      <div class="cake-content-info">
        <cake-info :cake-info="currentCakeInfo" :filling="getCurrentCakeFilling" />
      </div>
    </div>
    <div class="cake-content-info-bottom mobile">
      <p
          v-html="currentCakeInfo.description"
          class="cake-content-info-bottom__description">
      </p>
    </div>
    <cake-auction-block :current-bets="currentBets" :current-cake-info="currentCakeInfo"/>
  </div>
</template>

<script>
import CakeSlider from "@/components/cake-slider"
import CakeInfo from "@/components/cake-info"
import CakeAuctionBlock from "@/components/cake-auction-block"

export default {
  components: {CakeSlider, CakeInfo, CakeAuctionBlock},
  name: "CakeView",
  computed: {
    currentCakeInfo() {
      return this.$store.getters.currentCake
    },
    currentBets() {
      return this.$store.getters.currentBets
    },
    getCurrentCakeFilling() {
      return this.$store.getters.currentCakeFilling
    }
  },
  mounted() {
    this.$store.dispatch('getCake', this.$route.params.slug)
    this.$store.dispatch('getCurrentBets', this.currentCakeInfo.id)
    this.$store.dispatch('getCurrentCakeFilling', this.currentCakeInfo.filling)
    window.scrollTo(0,0)
  }
}
</script>

