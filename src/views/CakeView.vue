<template>
  <div class="container">
    <div class="cake-content">
      <div class="cake-content-images">
        <cake-slider :cake-info="cakeInfo"/>
      </div>
      <div class="cake-content-info">
        <cake-info :cake-info="cakeInfo"/>
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
  name: "CakeView",
  mounted() {
    this.cakeInfo = [
      {
        name: 'Стич',
        startDate: '27 декабря, в 16:00',
        endDate: '23 часа',
        filling: 'Радуга',
        address: 'г. Коломна, ул. Ленина, дом 103А. cab1',
        delivery: true,
        startBet: '750',
        currency: '₽',
        minStep: '100',
        active: false,
        slides: [
          {
            img: '/images/cakes4.jpg',
          },
          {
            img: '/images/cakes3.jpg'
          },
          {
            img: '/images/cakes4.jpg'
          },
          {
            img: '/images/medstal.jpg'
          },
        ],
        img: '/images/cakes2.jpg',
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
      }
    ]
  },
  data() {
    return {
      cakeInfo: []
    }
  }
}
</script>

