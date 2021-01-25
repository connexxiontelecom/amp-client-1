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
        <span>Sorry, reloading the application will cause it to lose some data. <b-link :to="{ name: 'affiliates' }">Go back to Affiliates</b-link></span>
      </div>
    </b-alert>
    <template v-if="loaded">
      <b-row>
        <b-col
          cols="12"
          xl="9"
          lg="8"
          md="7"
        >
          <affiliate-data />
        </b-col>
        <b-col
          v-if="currentAffiliate.upstream_affiliate"
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <affiliate-upstream />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <affiliate-info />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <affiliate-bank />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          lg="8"
        >
          <affiliate-downstreams />
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import {
  BCard, BAlert, BLink, BRow, BCol, BBadge, VBTooltip, VBModal,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import affiliate from '@/mixins/affiliate'
import AffiliateData from './AffiliateData.vue'
import AffiliateUpstream from './AffiliateUpstream.vue'
import AffiliateInfo from './AffiliateInfo.vue'
import AffiliateBank from './AffiliateBank.vue'
import AffiliateDownstreams from './AffiliateDownstreams.vue'

export default {
  components: {
    BCard,
    BAlert,
    BBadge,
    BRow,
    BCol,
    BLink,
    AffiliateData,
    AffiliateUpstream,
    AffiliateInfo,
    AffiliateBank,
    AffiliateDownstreams,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [affiliate],
  data() {
    return {
      loaded: false,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
  created() {
    if (this.$router.currentRoute.params.affiliateID) {
      this.loaded = true
    }
  },
}
</script>
