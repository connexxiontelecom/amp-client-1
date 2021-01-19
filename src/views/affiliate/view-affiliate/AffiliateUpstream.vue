<template>
  <b-card
    no-body
    class="border-primary"
  >
    <b-card-header class="d-flex justify-content-between align-items-center pt-75 pb-25">
      <h5 class="mb-0">
        Upstream Affiliate
      </h5>
      <b-badge
        v-if="currentAffiliate.upstream_affiliate.status === '1'"
        pill
        variant="light-success"
        class="text-capitalize"
      >
        Active
      </b-badge>
      <b-badge
        v-if="currentAffiliate.upstream_affiliate.status === '0'"
        pill
        variant="light-danger"
        class="text-capitalize"
      >
        Inactive
      </b-badge>
      <small class="text-muted w-100">
        Affiliate Information
      </small>
    </b-card-header>

    <b-card-body>
      <ul class="list-unstyled my-1">
        <li>
          <span class="align-middle">{{ currentAffiliate.upstream_affiliate.firstname+' '+currentAffiliate.upstream_affiliate.lastname }}</span>
        </li>
        <li class="my-25">
          <span class="align-middle">{{ currentAffiliate.upstream_affiliate.email }}</span>
        </li>
        <li>
          <span class="align-middle">{{ currentAffiliate.upstream_affiliate.ref_code }}</span>
        </li>
        <li>
          <span class="align-middle"> @{{ currentAffiliate.upstream_affiliate.username }}</span>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BBadge, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { mapGetters } from 'vuex'

export default {
  directives: {
    Ripple,
  },
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BBadge,
    // eslint-disable-next-line vue/no-unused-components
    BButton,
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
}
</script>
