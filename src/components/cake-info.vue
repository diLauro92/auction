<template>
  <div
      v-for="(item, index) in cakeInfo"
      :key="index"
  >
    <div class="cake-content-info-top">
      <div
          class="cake-info-main">
        <p class="cake-info-main__title shop-item__title">{{ item.name }}</p>
        <p class="cake-info-main__date shop-item__date active">Идёт, осталось {{ item.endDate }}</p>
        <p class="cake-info-main__bet-title shop-item__bet-title">Начальная ставка</p>
        <div class="cake-info-main__bet shop-item-bet">
          <div class="cake-info-main__bet-amount shop-item__bet-amount">
            {{ item.startBet }}&nbsp;{{ item.currency }}
          </div>
          <div class="cake-info-main__bet-step shop-item__bet-step">минимальный <br>
            шаг {{ item.minStep }}&nbsp;{{ item.currency }}
          </div>
        </div>
      </div>
      <div class="cake-info-advanced">
        <div class="cake-info-filling shop-item-filling info-block-with-img">
          <img src="/images/Ellipse10.png" alt="" class="cake-info-filling__img shop-item-filling__img">
          <p class="cake-info-filling__text shop-item-filling__text">
            Начинка: {{ item.filling }}
          </p>
        </div>
        <div class="cake-info-address shop-item-adress info-block-with-img">
          <img src="/images/icon/check.png" alt="" class="shop-item-filling__img">
          <p class="cake-info__address shop-item__adress">
            Адрес: {{ item.address }}
          </p>
        </div>
        <div class="cake-info-delivery shop-item-delivery info-block-with-img">
          <img
              src="/images/icon/check.png"
              :class="[`shop-item-filling__img ${item.delivery ? `` : `hover`}`]"
          >
          <p
              v-if="item.delivery"
              class="cake-info__delivery shop-item__delivery"
          >
            Есть доставка
          </p>
          <p
              v-if="!item.delivery"
              class="cake-info__delivery shop-item__delivery"
          >
            Доставки нет
          </p>
        </div>
      </div>
    </div>
    <div class="cake-content-info-bottom desktop">
      <p
          v-html="item.description"
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
      type: Array,
      default: () => []
    }
  }
}
</script>
