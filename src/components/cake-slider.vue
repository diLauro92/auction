<template>
  <div class="cake-content-images__main-img">
    <swiper
        :modules="[Thumbs]"
        :thumbs="{swiper: thumbsSwiper}"
        class="cake-content-images__main__img"
    >
      <swiper-slide
          v-for="(item, index) in swiperBase"
          :key="index"
      >
        <img
            :src="item.img"
            class="cake-content-images-slider__item"
        >
      </swiper-slide>
    </swiper>
    <swiper
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
          v-for="(item, index) in swiperBase"
          :key="index"
      >
        <img
            :src="item.img"
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
    const swiperBase = ref([
      {
        img: '/images/cakes2.jpg'
      },
      {
        img: '/images/cakes3.jpg'
      },
      {
        img: '/images/cakes4.jpg'
      },
      {
        img: '/images/testCake.jpg'
      },
      {
        img: '/images/medstal.jpg'
      }
    ]);
    return {modules: [Pagination, Autoplay], swiperBase, Thumbs, thumbsSwiper, setThumbsSwiper, valueRow}
  },
}
</script>
