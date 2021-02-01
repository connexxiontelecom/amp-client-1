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
        <span>Sorry, reloading the application will cause it to lose some data. <b-link :to="{ name: 'admin-accounts' }">Go back to Admin Accounts</b-link></span>
      </div>
    </b-alert>
    <template v-if="loaded">
      <b-row>
        <b-col
          cols="12"
        >
          <admin-data />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="7"
        >
          <admin-permissions />
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
import admin from '@/mixins/admin'
import AdminData from './AdminData.vue'
import AdminPermissions from './AdminPermissions.vue'

export default {
  components: {
    BCard,
    BAlert,
    BBadge,
    BRow,
    BCol,
    BLink,
    AdminData,
    AdminPermissions,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [admin],
  data() {
    return {
      loaded: false,
    }
  },
  computed: {
    ...mapGetters({
      currentAdmin: 'admin/getCurrentAdmin',
    }),
  },
  created() {
    if (this.$router.currentRoute.params.adminID) {
      this.loaded = true
    }
  },
}
</script>
