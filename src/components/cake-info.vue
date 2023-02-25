<template>
  <div>
    <div class="cake-content-info-top">
      <div
          class="cake-info-main">
        <p class="cake-info-main__title shop-item__title">{{ cakeInfo.name }}</p>
        <p
            v-if="cakeInfo.active"
            class="cake-info-main__date shop-item__date active"
        >
          Идёт, осталось {{ getLeftHours(cakeInfo.endDate) }}
        </p>
        <p
            v-if="!cakeInfo.active"
            class="cake-info-main__date shop-item__date"
        >
          Начнётся {{ getFormatDate(cakeInfo.startDate) }}
        </p>
        <p class="cake-info-main__bet-title shop-item__bet-title">Начальная ставка</p>
        <div class="cake-info-main__bet shop-item-bet">
          <div class="cake-info-main__bet-amount shop-item__bet-amount">
            {{ cakeInfo.startBet }}&nbsp;{{ cakeInfo.currency }}
          </div>
          <div class="cake-info-main__bet-step shop-item__bet-step">минимальный <br>
            шаг {{ cakeInfo.minStep }}&nbsp;{{ cakeInfo.currency }}
          </div>
        </div>
      </div>
      <div class="cake-info-advanced">
        <div class="cake-info-filling shop-item-filling info-block-with-img">
          <img
              :src="filling.img"
              class="cake-info-filling__img shop-item-filling__img">
          <p class="cake-info-filling__text shop-item-filling__text">
            Начинка: {{ filling.name }}
          </p>
        </div>
        <div class="cake-info-address shop-item-adress info-block-with-img">
          <img src="/images/icon/check.png" alt="" class="shop-item-filling__img">
          <p class="cake-info__address shop-item__adress">
            Адрес: {{ cakeInfo.address }}
          </p>
        </div>
        <div class="cake-info-delivery shop-item-delivery info-block-with-img">
          <img
              src="/images/icon/check.png"
              :class="[`shop-item-filling__img ${cakeInfo.delivery ? `` : `hover`}`]"
          >
          <p
              v-if="cakeInfo.delivery"
              class="cake-info__delivery shop-item__delivery"
          >
            Есть доставка
          </p>
          <p
              v-if="!cakeInfo.delivery"
              class="cake-info__delivery shop-item__delivery"
          >
            Доставки нет
          </p>
        </div>
      </div>
    </div>
    <div class="cake-content-info-bottom desktop">
      <p
          v-html="cakeInfo.description"
          class="cake-content-info-bottom__description">
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "cake-info",
  props: {
    cakeInfo: {
      type: Object,
      default: () => {}
    },
    filling: {
      type: Object,
      default: () => {}
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
}
</script>
