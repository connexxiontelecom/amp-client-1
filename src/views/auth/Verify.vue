<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo" to="/">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Affiliate Marketing Portal <br>
        <small>Powered by Connexxion Telecom</small>
      </h2>
    </b-link>

    <div
      v-if="isVerified"
      class="misc-inner p-2 p-sm-3"
    >
      <div class="w-100 text-center">
        <h2 class="mb-1">
          AMP Email Address Verification 👋
        </h2>
        <p class="mb-2">
          Your email address has been successfully verified.
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          :to="{ name: 'login' }"
        >
          Sign in here to continue
        </b-button>
      </div>
    </div>
    <div
      v-else-if="!isVerified"
      class="misc-inner p-2 p-sm-3"
    >
      <div class="w-100 text-center">
        <h2 class="mb-1">
          AMP Email Address Verified 🎉
        </h2>
        <p class="mb-2">
          Your email address has already been verified.
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          :to="{ name: 'home' }"
        >
          Continue to dashboard
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import affiliate from '@/mixins/affiliate'
import { mapGetters } from 'vuex'

export default {
  components: {
    BLink, BButton, VuexyLogo,
  },
  mixins: [affiliate],
  data() {
    return {
      downImg: require('@/assets/images/pages/not-authorized.svg'),
      verifyCode: this.$route.params.pathMatch,
    }
  },
  computed: {
    ...mapGetters({
      isVerified: 'affiliate/getIsVerified',
    }),
  },
  created() {
    this.verifyAccount()
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
