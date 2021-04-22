<template>
  <div>
    <admin-products v-if="isAdmin" />
    <affiliate-products v-else-if="isAffiliate" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdminProducts from '@/views/product/AdminProducts.vue'
import AffiliateProducts from '@/views/product/AffiliateProducts.vue'

export default {
  components: {
    AdminProducts,
    AffiliateProducts,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isAdmin: 'auth/getIsAdmin',
      isAffiliate: 'auth/getIsAffiliate',
    }),
  },
  created() {},
  methods: {},
}
</script>
