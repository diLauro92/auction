<template>
  <div
      v-for="(item, index) in cakesList"
      :key="index"
      class="auction-shop-item">
    <div class="auction-shop-item-img">
      <router-link to="/cake">
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
        Идет, осталось {{ item.endDate }}
      </p>
      <p
          v-if="!item.active"
          class="shop-item__date"
      >
        Начнётся {{ item.startDate }}
      </p>
      <div class="shop-item-filling info-block-with-img">
        <img src="/images/Ellipse10.png" alt="" class="shop-item-filling__img">
        <p class="shop-item-filling__text">
          Начинка: {{ item.filling }}
        </p>
      </div>
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
          {{ item.startBet }}&nbsp;{{ item.amount }}
        </div>
        <div class="shop-item__bet-step">минимальный <br>
          шаг {{ item.minStep }}&nbsp;{{ item.amount }}
        </div>
      </div>
      <router-link
          to="/"
          :class="[`auction-participate__btn btn ${item.active ? `active` : ``}`]"
      >
        Участвовать
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "auction-item",
  data() {
    return {
      cakesList: [
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/medstal.jpg'
        },
        {
          name: 'Лесные ягоды',
          startDate: '1 января, в 12:00',
          endDate: '23 часа',
          filling: 'Ягоды',
          address: 'г. Балашиха, ул. Советская, дом 1',
          delivery: false,
          startBet: '500',
          amount: '₽',
          minStep: '150',
          active: true,
          img: '/images/cakes2.jpg'
        },
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/cakes3.jpg'
        },
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/cakes4.jpg'
        },
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/medstal.jpg'
        },
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/medstal.jpg'
        },
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/medstal.jpg'
        },
        {
          name: 'Стич',
          startDate: '27 декабря, в 16:00',
          endDate: '23 часа',
          filling: 'Радуга',
          address: 'г. Коломна, ул. Ленина, дом 103А',
          delivery: true,
          startBet: '750',
          amount: '₽',
          minStep: '100',
          active: false,
          img: '/images/medstal.jpg'
        },
      ]
    }
  }
}
</script>
