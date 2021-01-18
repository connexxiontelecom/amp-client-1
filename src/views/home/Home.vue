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
import admin from '@/mixins/admin'
import HomeWelcome from '@/views/home/HomeWelcome.vue'
import HomeStatistics from '@/views/home/HomeStatistics.vue'

export default {
  components: {
    BRow,
    BCol,
    HomeWelcome,
    HomeStatistics,
  },
  mixins: [admin],
  mounted() {
    this.getAdmins()
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
