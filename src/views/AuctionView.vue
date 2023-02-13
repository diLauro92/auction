<template>
  <div class="container">
    <div class="title-block">
      <h1 class="title-block__title">
        {{ metaData.titlePage }}
      </h1>
      <p class="title-block__description">
        {{ metaData.description }}
      </p>
    </div>

    <div class="auction-body">
      <div class="auction-header">
        <div class="auction-tabs">
          <ul class="auction-tabs-list">
            <li
                class="auction-tabs-item"
                v-on:click="choiceTab"
                v-for="(item, index) in tabsList"
                :key="index"
                :class="[`auction-tabs-item ${item.activity ? `active` : ``}`]"
            >
              <router-link
                  :to="item.url"
                  class="auction-tabs-item__link"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="auction-header-btn">
          <router-link
              @click="showModal"
              to="/auction"
              class="auction-header__btn btn"
          >
            Создать аукцион
          </router-link>
        </div>
      </div>
      <div class="auction-shop">
        <auction-item :cakes-list="cakes" />
      </div>
    </div>
  </div>
  <create-form ref="modal"/>
</template>

<script>

import AuctionItem from "@/components/auction-item";
// import axios from 'axios';
import CreateForm from '@/components/create-form'

export default {
  components: {AuctionItem, CreateForm},
  mounted() {
    // axios.get('http://auction/cakes').then(response => {
    //   console.log(response)
    // })
    this.cakes = [
      {
        name: 'Медсталь торт',
        startDate: '27 декабря, в 16:00',
        endDate: '23 часа',
        filling: 'Радуга',
        address: 'г. Коломна, ул. Ленина, дом 103А',
        delivery: true,
        startBet: '750',
        amount: '₽',
        minStep: '100',
        active: false,
        img: '/images/medstal.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/cakes2.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/cakes3.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/cakes4.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/medstal.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/medstal.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/medstal.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
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
        img: '/images/medstal.jpg',
        slides: {
          slide1: '/images/cakes2.jpg',
          slide2: '/images/cakes3.jpg',
          slide3: '/images/cakes4.jpg',
          slide4: '/images/medstal.jpg',
        },
        description: 'Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake sweet roll sweet dragée dragée. Lollipop dessert donut' +
            ' marzipan cookie bonbon sesame snaps chocolate cake. <br><br> Toffee chocolate cake apple pie sugar plum sesame snaps muffin cake pudding cupcake. ' +
            'Muffin danish muffin lollipop biscuit jelly beans oat cake croissant.'
      },
    ]
  },
  data() {
    return {
      metaData: {
        titlePage: "Аукцион",
        description: "Бывает, заказчик не хочет выкупать заказанный им торт, и кондитер остается с тортом и без прибыли. Здесь вы можете продать торт иному лицу, либо купить его."
      },
      tabsList: [
        {
          name: 'Проходят сейчас',
          url: '/auction',
          activity: false
        },
        {
          name: 'Запланированные',
          url: '/auction',
          activity: true
        },
        {
          name: 'Мой аукцион',
          url: '/auction',
          activity: false
        },
      ],
      cakes: []
    }
  },
  methods: {
    choiceTab: function () {
      document.addEventListener('click', e => {
            e.target.parentElement.classList.add('active')
          },
      )
      const tabArr = document.getElementsByClassName('auction-tabs-item')
      for (const el of tabArr) {
        el.classList.remove('active')
      }
    },
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    }
  }
}
</script>
