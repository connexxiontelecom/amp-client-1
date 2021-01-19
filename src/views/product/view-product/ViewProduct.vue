<template>
  <div>
    <b-alert
      v-if="!loaded"
      variant="warning"
      show
    >
      <h4 class="alert-heading">
        Application Error
      </h4>
      <div class="alert-body">
        <span>Sorry, reloading the application will cause it to lose some data. <b-link :to="{ name: 'products' }">Go back to Products</b-link></span>
      </div>
    </b-alert>
    <div v-if="loaded">
      <b-row>
        <b-col
          lg="8"
          md="12"
        >
          <b-card
            title="Product Details"
            class="border-primary"
          >
            <table class="mt-2 mt-xl-0 w-100">
              <tr>
                <th class="pb-50">
                  <feather-icon
                    icon="PackageIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Name</span>
                </th>
                <td class="pb-50 text-uppercase">
                  {{ currentProduct.name }}
                </td>
              </tr>
              <tr>
                <th class="pb-50">
                  <feather-icon
                    icon="LinkIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">URL</span>
                </th>
                <td class="pb-50">
                  <a :href="currentProduct.url">{{ currentProduct.url }}</a>
                </td>
              </tr>
              <tr>
                <th class="pb-50">
                  <feather-icon
                    icon="FlagIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Category</span>
                </th>
                <td class="pb-50">
                  {{ currentProduct.category }}
                </td>
              </tr>
              <tr>
                <th class="pb-50">
                  <feather-icon
                    icon="CheckIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Status</span>
                </th>
                <td class="pb-50 text-capitalize">
                  <b-badge
                    v-if="currentProduct.status === '1'"
                    pill
                    variant="light-success"
                    class="text-capitalize"
                  >
                    Active
                  </b-badge>
                  <b-badge
                    v-if="currentProduct.status === '0'"
                    pill
                    variant="light-danger"
                    class="text-capitalize"
                  >
                    Inactive
                  </b-badge>
                </td>
              </tr>
              <tr>
                <th class="pb-50">
                  <feather-icon
                    icon="CalendarIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Added</span>
                </th>
                <td class="pb-50">
                  {{ new Date(currentProduct.created_at).toDateString() }}
                </td>
              </tr>
              <tr>
                <th>
                  <feather-icon
                    icon="AlignJustifyIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Description</span>
                </th>
                <td>
                  {{ currentProduct.description }}
                </td>
              </tr>
            </table>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <product-plans />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import {
  BCard, BAlert, BLink, BRow, BCol, BBadge, VBTooltip, VBModal,
} from 'bootstrap-vue'
import product from '@/mixins/product'
import { mapGetters } from 'vuex'
import ProductPlans from './ProductPlans.vue'

export default {
  components: {
    BCard,
    BAlert,
    BBadge,
    BRow,
    BCol,
    BLink,
    ProductPlans,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [product],
  data() {
    return {
      loaded: false,
    }
  },
  computed: {
    ...mapGetters({
      currentProduct: 'product/getCurrentProduct',
    }),
  },
  created() {
    if (this.$router.currentRoute.params.productID) {
      this.loaded = true
      this.getProduct(this.$router.currentRoute.params.productID)
    }
  },
}
</script>
