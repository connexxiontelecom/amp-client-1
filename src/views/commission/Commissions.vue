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
            md="7"
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
            md="5"
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
        :items="planCommissions"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        striped
        responsive
        show-empty
        @filtered="onFiltered"
      >
        <template #cell(plan_name)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded
                src=""
                :text="avatarText(`${data.item.plan_name}`)"
                variant="light-success"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.plan_name }}
            </b-link>
            <small class="text-muted text-uppercase">{{ data.item.product_name }}</small>
          </b-media>
        </template>
        <template #cell(plan_price)="data">
          &#8358; {{ parseInt(data.item.plan_price).toLocaleString('en') }}
        </template>
        <template #cell(plan_commission)="data">
          &#8358; {{ parseInt(data.item.plan_commission).toLocaleString('en') }}
        </template>
        <template #cell(gen_1)="data">
          &#8358; {{ parseInt(data.item.gen_1).toLocaleString('en') }}
        </template>
        <template #cell(gen_2)="data">
          &#8358; {{ parseInt(data.item.gen_2).toLocaleString('en') }}
        </template>
        <template #cell(gen_3)="data">
          &#8358; {{ parseInt(data.item.gen_3).toLocaleString('en') }}
        </template>
        <template #cell(gen_4)="data">
          &#8358; {{ parseInt(data.item.gen_4).toLocaleString('en') }}
        </template>
        <template #cell(gen_5)="data">
          &#8358; {{ parseInt(data.item.gen_5).toLocaleString('en') }}
        </template>
      </b-table>
      <div class="mx-2 mb-2 mt-1">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">There are {{ numPlanCommissions }} pricing plans</span>
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
/* eslint-disable vue/no-unused-components */
import {
  BAvatar,
  BBadge,
  BButton,
  BCard,
  BCol,
  BFormInput,
  BLink,
  BMedia,
  BPagination,
  BRow,
  BTable, VBTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import commission from '@/mixins/commission'
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
  mixins: [commission],
  data() {
    return {
      perPage: 5,
      perPageOptions: [5, 10, 25, 100],
      filter: null,
      totalRows: this.$store.getters['commission/getNumPlanCommissions'],
      currentPage: 1,
      avatarText,
      fields: [
        { key: 'plan_name', label: 'pricing plan', sortable: true },
        { key: 'plan_price', label: 'price', sortable: true },
        { key: 'plan_commission', label: 'commission', sortable: true },
        { key: 'gen_1', label: 'affiliate retains', sortable: true },
        { key: 'gen_2', label: '1st gen', sortable: true },
        { key: 'gen_3', label: '2nd gen', sortable: true },
        { key: 'gen_4', label: '3rd gen', sortable: true },
        { key: 'gen_5', label: '4th gen', sortable: true },
      ],
    }
  },
  computed: {
    ...mapGetters({
      planCommissions: 'commission/getPlanCommissions',
      numPlanCommissions: 'commission/getNumPlanCommissions',
      currentGeneration: 'commission/getCurrentGeneration',
    }),
  },
  created() {
    this.getPlanCommissions()
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
