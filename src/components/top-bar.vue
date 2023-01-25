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
      <button class="header_signup__register">
        Регистрация
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerMenuList: [
        {
          name: 'Аукцион', path: '/auction'
        },
        {
          name: 'Правила аукциона', path: '/rules'
        }
      ]
    }
  }
}
</script>

