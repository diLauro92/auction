<template>
  <div class="container">
    <top-bar/>
    <bread-crumbs/>
  </div>
  <router-view/>
  <footer-block/>
</template>

<style lang="less">
</style>
<script>
import TopBar from "@/components/top-bar";
import BreadCrumbs from "@/components/bread-crumbs";
import FooterBlock from "@/components/footer-block"

export default {
  components: {FooterBlock, BreadCrumbs, TopBar},
  mounted() {
    this.$store.dispatch('getCakes')
    this.$store.dispatch('getAllBets')
    this.$store.dispatch('getCities')
    this.$store.dispatch('getFillings')
  }
}
</script>