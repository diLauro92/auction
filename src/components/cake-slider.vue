<template>
  <div
      v-on:click="console"
      class="cake-content-images__main-img">
    <swiper
        v-for="(item, index) in cakeInfo"
        :key="index"
        :modules="[Thumbs]"
        :thumbs="{swiper: thumbsSwiper}"
        class="cake-content-images__main__img"
    >
      <swiper-slide
          v-for="(images, index) in item.slides"
          :key="index"
      >
        <img
            :src="images.img"
            class="cake-content-images-slider__item"
        >
      </swiper-slide>
    </swiper>
    <swiper
        v-for="(item, index) in cakeInfo"
        :key="index"
        :modules="[Thumbs]"
        watch-slides-progress
        @swiper="setThumbsSwiper"
        :loop="true"
        :slidesPerView="valueRow"
        :space-between="10"
        :pagination="{clickable: true}"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        class="cake-content-images-slider">
      <swiper-slide
          v-for="(images, index) in item.slides"
          :key="index"
      >
        <img
            :src="images.img"
            class="cake-content-images-slider__item"
        >
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>

import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Pagination, Thumbs} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from 'vue'

export default {
  components: {Swiper, SwiperSlide},
  name: "cake-slider",
  props: {
    cakeInfo: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    console: function () {
      console.log(this.cakeInfo)
    }
  },
  setup() {
    const thumbsSwiper = ref(null)
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper
    }
    let valueRow
    let screenSize =  window.matchMedia("(max-width: 768px)")
    if (screenSize.matches) {
       valueRow = 3
    } else {
      valueRow = 4
    }

    return {modules: [Pagination, Autoplay], Thumbs, thumbsSwiper, setThumbsSwiper, valueRow}
  },
}
</script>
