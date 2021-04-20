<template>
  <div>
    <div v-if="isAdmin">
      <admin-product-sales />
    </div>
    <div v-else-if="isAffiliate">
      <affiliate-product-sales />
    </div>
  </div>
</template>

<script>
import AffiliateProductSales from '@/views/product-sales/AffiliateProductSales.vue'
import AdminProductSales from '@/views/product-sales/AdminProductSales.vue'
import productSales from '@/mixins/product-sales'
import { avatarText } from '@core/utils/filter'
import api from '@/api-config'
import { mapGetters } from 'vuex'

export default {
  components: {
    AffiliateProductSales,
    AdminProductSales,
  },
  mixins: [productSales],
  data() {
    return {
      api,
      avatarText,
      perPage: 5,
      perPageOptions: [5, 10, 25, 100],
      filter: null,
      totalRows: this.$store.getters['productSales/getNumProductSales'],
      currentPage: 1,
      fields: [
        { key: 'product', sortable: true },
        { key: 'affiliate', sortable: true },
        { key: 'client', sortable: true },
        { key: 'amount', sortable: true },
        { key: 'status' },
        { key: 'created_at', label: 'Purchased At', sortable: true },
      ],
    }
  },
  computed: {
    ...mapGetters({
      productSales: 'productSales/getAllProductSales',
      numProductSales: 'productSales/getNumProductSales',
      isAffiliate: 'auth/getIsAffiliate',
      isAdmin: 'auth/getIsAdmin',
    }),
  },
  created() {
    if (this.$store.getters['auth/getIsAdmin']) {
      this.getProductSales()
    } else if (this.$store.getters['auth/getIsAffiliate']) {
      this.getAffiliateProductSales(this.$store.getters['auth/getUser'].ref_code)
    }
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
