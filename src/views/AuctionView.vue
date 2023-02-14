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
                v-on:click="choice_now"
                id="now"
            >
              <router-link
                  to="/auction"
                  class="auction-tabs-item__link"
              >
                Проходят сейчас
              </router-link>
            </li>
            <li
                class="auction-tabs-item"
                v-on:click="choice_future"
                id="future"
            >
              <router-link
                  to="/auction"
                  class="auction-tabs-item__link"
              >
                Запланированные
              </router-link>
            </li>
            <li
                class="auction-tabs-item"
                v-on:click="choice_myAct"
                id="myAuction"
            >
              <router-link
                  to="/auction"
                  class="auction-tabs-item__link"
              >
                Мой аукцион
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
        <auction-item v-if="!filteredState" :cakes-list="cakes"/>
        <auction-item v-if="filteredState" :cakes-list="filteredCakes"/>
      </div>
    </div>
  </div>
  <create-form ref="modal"/>
</template>

<script>

import AuctionItem from "@/components/auction-item";
import CreateForm from '@/components/create-form';

export default {
  components: {AuctionItem, CreateForm},
  computed: {
    cakes() {
      return this.$store.getters.allCakes
    },
    filteredCakes() {
      return this.$store.getters.filteredCakes
    }
  },
  data() {
    return {
      metaData: {
        titlePage: "Аукцион",
        description: "Бывает, заказчик не хочет выкупать заказанный им торт, и кондитер остается с тортом и без прибыли. Здесь вы можете продать торт иному лицу, либо купить его."
      },
      filteredState: false
    }
  },
  methods: {
    filterCakes(value) {
      this.$store.dispatch('filteredCakesAct', value)
    },
    filterCakesByUser(value) {
      this.$store.dispatch('filteredCakesUser', value)
    },

    choice_now: function () {
      document.getElementById('now').classList.add('active')
      document.getElementById('future').classList.remove('active')
      document.getElementById('myAuction').classList.remove('active')
      this.filteredState = true
      this.filterCakes(true)
    },
    choice_future: function () {
      document.getElementById('now').classList.remove('active')
      document.getElementById('future').classList.add('active')
      document.getElementById('myAuction').classList.remove('active')
      this.filteredState = true
      this.filterCakes(false)
    },
    choice_myAct: function () {
      document.getElementById('now').classList.remove('active')
      document.getElementById('future').classList.remove('active')
      document.getElementById('myAuction').classList.add('active')
      this.filteredState = true
      this.filterCakesByUser(true)
    },
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    }
  }
}
</script>
