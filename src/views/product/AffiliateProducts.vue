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
            </div>
          </b-col>
        </b-row>
      </div>
      <b-table
        class="position-relative mb-0"
        :items="products"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        striped
        responsive=""
        show-empty
        @filtered="onFiltered"
      >
        <template #cell(name)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded=""
                :src="api.endpoint+'/uploads/products/'+data.item.logo"
                :text="avatarText(`${data.item.name}`)"
                variant="light-info"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap text-uppercase"
            >
              {{ data.item.name }}
            </b-link>
            <small class="text-muted">{{ data.item.category }}</small>
          </b-media>
        </template>
        <template #cell(url)="data">
          <a
            :href="data.item.url"
            target="_blank"
          >
            {{ data.item.url }}
          </a>
        </template>
        <template #cell(registration_link)="data">
          <a
            :href="data.item.registration_link"
            target="_blank"
          >
            {{ data.item.registration_link }}
          </a>
        </template>
        <template #cell(actions)="data">
          <div class="text-nowrap">
            <feather-icon
              :id="`view-${data.item.product_id}`"
              v-b-tooltip.hover.top="'Copy Link'"
              icon="CopyIcon"
              size="16"
              class="cursor-pointer mx-1"
              @click="copyReferralLink(data.item)"
            />
          </div>
        </template>
      </b-table>
      <div class="mx-2 mb-2 mt-1">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">There are {{ numProducts }} products</span>
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
import { VBTooltip } from 'bootstrap-vue'
import vSelect from 'vue-select'
import product from '@/mixins/product'
import { avatarText } from '@core/utils/filter'
import api from '@/api-config'
import { mapGetters } from 'vuex'

export default {
  components: {
    vSelect,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  mixins: [product],
  data() {
    return {
      api,
      perPage: 5,
      perPageOptions: [5, 10, 25, 100],
      filter: null,
      totalRows: this.$store.getters['product/getNumProducts'],
      currentPage: 1,
      avatarText,
      fields: [
        { key: 'name', sortable: true },
        { key: 'url', sortable: true },
        { key: 'registration_link', sortable: true },
        { key: 'actions', thStyle: { width: '10%' } },
      ],
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/getAllProducts',
      numProducts: 'product/getNumProducts',
      isAdmin: 'auth/getIsAdmin',
    }),
  },
  created() {
    this.getAffiliateProducts()
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    copyReferralLink(currentProduct) {
      this.referralLink = `${currentProduct.registration_link}/${this.$store.getters['auth/getUser'].ref_code}`
      this.$copyText(this.referralLink).then().catch()
      this.toast('Copied Referral Link!', 'CopyIcon', '', 'success')
    },
  },
}
</script>
<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
