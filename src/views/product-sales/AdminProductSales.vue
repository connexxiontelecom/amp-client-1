<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="filter"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <v-select
                v-model="statusFilter"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="statusOptions"
                class="invoice-filter-select"
                placeholder="Select Status"
              >
                <template #selected-option="{ label }">
                  <span class="text-truncate overflow-hidden">
                    {{ label }}
                  </span>
                </template>
              </v-select>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-table
        class="position-relative mb-0"
        :items="productSales"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        striped
        responsive=""
        show-empty
        @filtered="onFiltered"
      >
        <template #cell(product)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded=""
                :src="api.endpoint+'/uploads/products/'+data.item.product.logo"
                :text="avatarText(`${data.item.product.name}`)"
                variant="light-info"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap text-uppercase"
            >
              {{ data.item.product.name }}
            </b-link>
            <small class="text-muted">{{ data.item.product.url }}</small>
          </b-media>
        </template>
        <template #cell(affiliate)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded=""
                src=""
                :text="avatarText(`${data.item.affiliate.firstname +' '+ data.item.affiliate.lastname}`)"
                variant="light-success"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.affiliate.firstname +' '+ data.item.affiliate.lastname }}
            </b-link>
            <small class="text-muted">@{{ data.item.affiliate.username }}</small>
          </b-media>
        </template>
        <template #cell(client)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded=""
                src=""
                :text="avatarText(`${data.item.company_name}`)"
                variant="light-success"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.company_name }}
            </b-link>
            <small class="text-muted">{{ data.item.contact_email }}</small>
          </b-media>
        </template>
        <template #cell(amount)="data">
          &#8358; {{ parseInt(data.item.amount).toLocaleString('en') }}
        </template>
        <template #cell(status)="data">
          <b-badge
            v-if="data.item.status === '1'"
            pill
            variant="light-danger"
            class="text-capitalize"
          >
            Unpaid
          </b-badge>
          <b-badge
            v-else-if="data.item.status === '0'"
            pill
            variant="light-warning"
            class="text-capitalize"
          >
            In progress
          </b-badge>
          <b-badge
            v-else-if="data.item.status === '2'"
            pill
            variant="light-success"
            class="text-capitalize"
          >
            Paid
          </b-badge>
        </template>
        <template #cell(created_at)="data">
          {{ new Date(data.item.created_at).toDateString() }}
          {{ new Date(data.item.created_at).toLocaleTimeString() }}
        </template>
      </b-table>
      <div class="mx-2 mb-2 mt-1">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">There are {{ numProductSales }} sales</span>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              class="mb-0 mt-1 mt-sm-0"
            />
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import productSales from '@/mixins/product-sales'
import { avatarText } from '@core/utils/filter'
import api from '@/api-config'
import { mapGetters } from 'vuex'

export default {
  components: {
    vSelect,
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
