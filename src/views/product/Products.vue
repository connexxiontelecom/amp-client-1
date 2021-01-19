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
              <b-button
                variant="primary"
                :to="{ name: 'add-product' }"
              >
                <span class="text-nowrap">Add Product</span>
              </b-button>
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
        responsive
        show-empty
        @filtered="onFiltered"
      >
        <template #cell(name)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded
                src=""
                :text="avatarText(`${data.item.name}`)"
                variant="light-info"
                :to="{name: 'view-admin'}"
              />
            </template>
            <b-link
              :to="{name: 'view-admin'}"
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
        <template #cell(num_plans)="data">
          {{ data.item.num_plans }} plans
        </template>
        <template #cell(status)="data">
          <b-badge
            v-if="data.item.status === '1'"
            pill
            variant="light-success"
            class="text-capitalize"
          >
            Active
          </b-badge>
          <b-badge
            v-if="data.item.status === '0'"
            pill
            variant="light-danger"
            class="text-capitalize"
          >
            Inactive
          </b-badge>
        </template>
        <template #cell(created_at)="data">
          {{ new Date(data.item.created_at).toDateString() }}
        </template>
        <template #cell(actions)="data">
          <div class="text-nowrap">
            <feather-icon
              :id="`view-${data.item.product_id}`"
              v-b-tooltip.hover.top="'View'"
              icon="EyeIcon"
              size="16"
              class="cursor-pointer mx-1"
              @click="$router.push({ name: 'view-product', params: { productID: data.item.product_id }})"
            />
            <feather-icon
              :id="`edit-${data.item.product_id}`"
              v-b-tooltip.hover.top="'Edit'"
              icon="EditIcon"
              class="cursor-pointer"
              size="16"
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
import {
  BCard, BTable, BRow, BCol, BMedia, BAvatar, BBadge, BFormInput, BButton, BPagination, BLink, VBTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import product from '@/mixins/product'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'

export default {
  components: {
    BCard,
    BMedia,
    BAvatar,
    BBadge,
    BRow,
    BCol,
    BTable,
    BFormInput,
    BButton,
    BPagination,
    BLink,
    vSelect,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  mixins: [product],
  data() {
    return {
      perPage: 5,
      perPageOptions: [5, 10, 25, 100],
      filter: null,
      totalRows: this.$store.getters['admin/getNumAdmins'],
      currentPage: 1,
      avatarText,
      fields: [
        { key: 'name', sortable: true },
        { key: 'url', sortable: true },
        { key: 'num_plans', label: 'product plans', sortable: true },
        { key: 'status' },
        { key: 'created_at', label: 'Added', sortable: true },
        { key: 'actions' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/getAllProducts',
      numProducts: 'product/getNumProducts',
    }),
  },
  created() {
    this.getProducts()
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
</style>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
