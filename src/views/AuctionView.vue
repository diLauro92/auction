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
        <auction-item/>
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
  // mounted() {
  //   axios.get('http://auction/cakes').then(response => {
  //     console.log(response)
  //   })
  // },
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
      ]
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
