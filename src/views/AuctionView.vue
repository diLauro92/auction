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
              to="/"
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
</template>

<script>

import AuctionItem from "@/components/auction-item";

export default {
  components: {AuctionItem},
  data() {
    return {
      metaData: {
        titlePage: "Аукцион",
        description: "Бывает, заказчик не хочет выкупать заказанный им торт, и кондитер остается с тортом и без прибыли. Здесь вы можете продать торт иному лицу, либо купить его."
      },
      tabsList: [
        {
          name: 'Проходят сейчас',
          url: '/',
          activity: false
        },
        {
          name: 'Запланированные',
          url: '/',
          activity: true
        },
        {
          name: 'Мой аукцион',
          url: '/',
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
    }
  }
}
</script>
