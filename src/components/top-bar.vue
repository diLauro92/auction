<template>
  <header class="header">
    <div class="header_nav">
      <img src="../assets/images/logo-sladostey.png" alt="" class="header_nav__logo">
      <nav class="header_nav__menu">
        <li
            v-for="(menu, index) in headerMenuList"
            :key="index"
        >
          <router-link
              :to="menu.path"
              class="header_nav__menu__link"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </nav>
    </div>
    <div class="header_signup">
      <button class="header_signup__cityBtn">
        Санкт-Петербург
      </button>
      <button
          @click="showModal"
          class="header_signup__register">
        Регистрация
      </button>
    </div>
  </header>
  <registration-form ref="modal"/>
</template>

<script>


import RegistrationForm from "@/components/registration-form";
export default {
  components: {RegistrationForm},
  data() {
    return {
      headerMenuList: [
        {
          name: 'Аукцион', path: '/'
        },
        {
          name: 'Правила аукциона', path: '/rules'
        }
      ],
    }
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    }
  }
}
</script>

