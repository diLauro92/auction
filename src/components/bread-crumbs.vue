<template>
  <b-breadcrumb class="breadcrumbs">
    <li
        class="breadcrumbs-el"
        v-for="(items, index) in breadcrumbsList"
        :key="index"
    >
      <router-link
          :to="items.href"
          class="breadcrumbs-el__link"
      >
        {{ items.text }}
      </router-link>
    </li>
  </b-breadcrumb>
</template>

<script>
export default {
  name: "bread-crumbs",
  data() {
    return {
      breadcrumbsList: [
        {
          text: 'Главная',
          href: '/'
        },
        {
          text: 'Аукцион',
          href: '/auction'
        }
      ]
    }
  }
}
</script>
