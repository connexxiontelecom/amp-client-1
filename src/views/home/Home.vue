<template>
  <div>
    <admin-home v-if="isAdmin" />
    <affiliate-home v-else-if="isAffiliate" />
  </div>
</template>

<script>
import AdminHome from '@/views/home/AdminHome.vue'
import AffiliateHome from '@/views/home/AffiliateHome.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AdminHome,
    AffiliateHome,
  },
  computed: {
    ...mapGetters({
      isAdmin: 'auth/getIsAdmin',
      isAffiliate: 'auth/getIsAffiliate',
    }),
  },
}
</script>
