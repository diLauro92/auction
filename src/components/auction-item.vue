<template>
  <div
      v-for="(item, index) in cakesList"
      :key="index"
      class="auction-shop-item">
    <div class="auction-shop-item-img">
      <router-link
          :to="'/' + item.slug">
        <img
            :src="item.img"
            class="shop-item__img"
        >
      </router-link>
    </div>
    <div class="auction-shop-item-info">
      <p class="shop-item__title">
        {{ item.name }}
      </p>
      <p
          v-if="item.active"
          class="shop-item__date active"
      >
        Идет, осталось {{ getLeftHours(item.endDate) }}
      </p>
      <p
          v-if="!item.active"
          class="shop-item__date"
      >
        Начнётся {{ getFormatDate(item.startDate) }}
      </p>
      <auction-item-filling :cake="item" :fillings-list="fillingList"/>
      <div class="shop-item-adress info-block-with-img">
        <img src="/images/icon/check.png" alt="" class="shop-item-filling__img">
        <p class="shop-item__adress">
          Адрес: {{ item.address }}
        </p>
      </div>
      <div class="shop-item-delivery info-block-with-img">
        <img
            src="/images/icon/check.png"
            :class="[`shop-item-filling__img ${item.delivery ? `` : `hover`}`]"
        >
        <p
            v-if="item.delivery"
            class="shop-item__delivery"
        >
          Есть доставка
        </p>
        <p
            v-if="!item.delivery"
            class="shop-item__delivery"
        >
          Доставки нет
        </p>
      </div>
      <p class="shop-item__bet-title">Начальная ставка</p>
      <div class="shop-item-bet">
        <div class="shop-item__bet-amount">
          {{ item.startBet }}&nbsp;{{ item.currency }}
        </div>
        <div class="shop-item__bet-step">минимальный <br>
          шаг {{ item.minStep }}&nbsp;{{ item.currency }}
        </div>
      </div>
      <router-link
          :to="'/' + item.slug"
          :class="[`auction-participate__btn btn ${item.active ? `active` : ``}`]"
      >
        Участвовать
      </router-link>
    </div>
  </div>
</template>

<script>

import AuctionItemFilling from "@/components/auction-item-filling";

export default {
  components: {AuctionItemFilling},
  props: {
    cakesList: {
      type: Array,
      default: () => []
    },
    fillingList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getFormatDate: function (date) {
      let newDate = Date.parse(date)
      let formatDate = new Date(newDate)
      let options = {
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
      }
      return formatDate.toLocaleString('ru', options)
    },
    getLeftHours: function (date) {
      let newDate = Date.parse(date)
      let localDate = new Date()
      let leftHours = newDate - localDate
      return Math.round(leftHours / 3600000) + ' часа'
    }
  },
  name: "auction-item"
}
</script>
