<template>
  <div>
    <b-row>
      <b-col
        lg="3"
      >
        <b-card class="text-center">
          <div>
            <h1 class="font-weight-bolder mb-25">
              {{ currentGeneration.num_gens }} Max
            </h1>
            <b-card-text class="font-weight-bold font-small-3 mb-2">
              Generations
            </b-card-text>

            <h1 class="font-large-1">
              <span class="text-success mr-50">{{ currentGeneration.gen_1 }}%</span>
              <small>Retained</small>
            </h1>
          </div>
          <b-button
            variant="primary"
            class="shadow mt-1"
            :to="{ name: 'plan-commissions' }"
          >
            <span>Plan Commissions </span>
            <feather-icon icon="ChevronsRightIcon" />
          </b-button>
          <hr>
          <b-card-text class="font-small-2 mb-50">
            Affiliate Retaining
          </b-card-text>
          <b-progress
            :value="parseInt(currentGeneration.gen_1)"
            max="100"
            height="6px"
            variant="success"
          />
          <b-card-text class="font-small-2 mb-50 mt-1">
            Upstream Affiliate Retaining
          </b-card-text>
          <b-progress
            :value="100 - parseInt(currentGeneration.gen_1)"
            max="100"
            height="6px"
            variant="warning"
          />
        </b-card>
      </b-col>
      <b-col lg="9">
        <commissions-table />
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import {
  BCard,
  BRow,
  BCol,
  BButton,
  BCardText,
  BDropdown,
  BDropdownItem,
  BProgress,
} from 'bootstrap-vue'
import commission from '@/mixins/commission'
import { mapGetters } from 'vuex'
import CommissionsTable from './CommissionsTable.vue'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BButton,
    BCardText,
    BDropdown,
    BDropdownItem,
    BProgress,
    CommissionsTable,
  },
  mixins: [commission],
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      allCommissions: 'commission/getAllCommissions',
      currentGeneration: 'commission/getCurrentGeneration',
    }),
  },
  created() {
    this.getCommissions()
  },
}
</script>
