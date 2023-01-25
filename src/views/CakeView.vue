<template>
  <div class="container">
    <div class="cake-content">
      <div class="cake-content-images">
        <cake-slider/>
      </div>
      <div class="cake-content-info">
        <cake-info/>
      </div>
    </div>
    <div class="cake-content-info-bottom mobile">
      <p class="cake-content-info-bottom__description">
        Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate cake.
        <br><br>
        Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.
      </p>
    </div>
    <cake-auction-block/>
  </div>
</template>

<script>
import CakeSlider from "@/components/cake-slider"
import CakeInfo from "@/components/cake-info"
import CakeAuctionBlock from "@/components/cake-auction-block"

export default {
  components: {CakeSlider, CakeInfo, CakeAuctionBlock},
  name: "CakeView"
}
</script>

