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
    <b-row>
      <b-col
        xl="4"
        md="4"
      >
        <home-commission />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import HomeWelcome from '@/views/home/HomeWelcome.vue'
import HomeStatistics from '@/views/home/HomeStatistics.vue'
import HomeCommission from '@/views/home/HomeCommission.vue'
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
    HomeCommission,
  },
  mixins: [admin, product, affiliate, commission],
  created() {
    this.getAdmins()
    this.getProducts()
    this.getAffiliates()
    this.getPlanCommissions()
    this.getCommissions()
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
