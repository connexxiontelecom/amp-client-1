<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
        <home-welcome />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <home-statistics />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import HomeWelcome from '@/views/home/HomeWelcome.vue'
import HomeStatistics from '@/views/home/HomeStatistics.vue'
import admin from '@/mixins/admin'
import product from '@/mixins/product'
import affiliate from '@/mixins/affiliate'
import commission from '@/mixins/commission'

export default {
  components: {
    BRow,
    BCol,
    HomeWelcome,
    HomeStatistics,
  },
  mixins: [admin, product, affiliate, commission],
  created() {
    if (this.$store.getters['auth/getIsAdmin']) {
      this.getAdmins()
      this.getAffiliates()
      this.getPlanCommissions()
      this.getCommissions()
    } else if (this.$store.getters['auth/getIsAffiliate']) {
      this.getProducts()
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
