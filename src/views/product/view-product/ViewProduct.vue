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
          cols="12"
        >
          <b-card>
            <b-row>
              <b-col
                cols="12"
                xl="5"
                class="d-flex justify-content-between flex-column"
              >
                <div class="d-flex justify-content-start">
                  <b-avatar
                    :src="currentProduct.logo"
                    :text="avatarText(`${currentProduct.name}`)"
                    variant="light-success"
                    size="104px"
                    rounded
                  />
                  <div class="d-flex flex-column ml-1">
                    <div class="mb-1">
                      <h4 class="mb-0">
                        {{ currentProduct.name }}
                      </h4>
                      <span class="text-muted card-text">{{ currentProduct.category }}</span>
                    </div>
                    <div class="d-flex flex-wrap">
                      <b-button
                        id="edit-affiliate-btn"
                        v-b-modal.update-affiliate
                        variant="primary"
                      >
                        Edit
                      </b-button>
                      <b-button
                        v-if="currentProduct.status === '0'"
                        variant="outline-success"
                        class="ml-1"
                      >
                        Reactivate
                      </b-button>
                      <b-button
                        v-else-if="currentProduct.status === '1'"
                        variant="outline-danger"
                        class="ml-1"
                      >
                        Deactivate
                      </b-button>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-2">
                  <div class="d-flex align-items-center">
                    <b-avatar
                      variant="light-primary"
                      rounded
                    >
                      <feather-icon
                        icon="TrendingUpIcon"
                        size="18"
                      />
                    </b-avatar>
                    <div class="ml-1">
                      <h5 class="mb-0">
                        0 <small class="text-muted">Sales</small>
                      </h5>
                      <small>Activity</small>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col
                cols="12"
                xl="7"
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
                        icon="ListIcon"
                        class="mr-75"
                      />
                      <span class="font-weight-bold">Pricing Plans</span>
                    </th>
                    <td class="pb-50">
                      {{ currentProduct.num_plans }} Plans
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
              </b-col>
            </b-row>
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
  BCard, BAlert, BLink, BRow, BCol, BBadge, VBTooltip, VBModal, BAvatar, BButton,
} from 'bootstrap-vue'
import product from '@/mixins/product'
import { mapGetters } from 'vuex'
import api from '@/apiConfig'
import { avatarText } from '@core/utils/filter'
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
    BAvatar,
    BButton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [product],
  data() {
    return {
      loaded: false,
      api,
      avatarText,
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
