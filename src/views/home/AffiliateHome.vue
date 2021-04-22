<template>
  <div>
    <h1 class="font-weight-normal">
      {{ greeting }}, {{ user.firstname }} {{ user.lastname }} 🎉
    </h1>
    <h6 class="font-weight-light mb-1">
      Pick up where you left off and view your latest activities
    </h6>
    <h5 class="mt-3 mb-2">
      Get started with AMP
    </h5>
    <b-row>
      <b-col
        md="5"
        lg="5"
        xl="3"
      >
        <b-card>
          <h5 class="mb-1">
            Manage sales
            <span class="float-right">
              <b-badge
                variant="light-primary"
              >
                {{ numProductSales }} total sales
              </b-badge>
            </span>
          </h5>
          <b-card-text
            class="font-small-4"
          >
            <h3 class="mt-1 mb-1">
              &#8358; {{ monthlyCommission.toLocaleString() }}
            </h3>
            Your commission earnings for <strong>{{ new Date().toLocaleString('default', { month: 'long' }) }}</strong>
          </b-card-text>
          <b-link to="/product-sales">
            Product Sales
            <feather-icon
              size="16"
              icon="ArrowRightIcon"
            />
          </b-link>
        </b-card>
      </b-col>
      <b-col
        md="5"
        lg="5"
        xl="3"
      >
        <b-card>
          <h5 class="mb-1">
            Verify your account
            <span class="float-right ml-auto">
              <b-badge
                v-if="user.profile === '1'"
                variant="light-success"
              >
                <feather-icon
                  icon="CheckIcon"
                  class="mr-25"
                />
                verified
              </b-badge>
              <b-badge
                v-else-if="user.profile === '0'"
                variant="light-warning"
              >
                <feather-icon
                  icon="XIcon"
                  class="mr-25"
                />
                unverified
              </b-badge>
            </span>
          </h5>
          <b-card-text
            class="font-small-4"
          >
            Confirm your basic details, verify your email address, and enter your bank information.
          </b-card-text>
          <b-link to="/account">
            Account
            <feather-icon
              size="16"
              icon="ArrowRightIcon"
            />
          </b-link>
        </b-card>
      </b-col>
      <b-col
        md="5"
        lg="5"
        xl="3"
      >
        <b-card>
          <h5 class="mb-1">
            Manage affiliates
            <span class="float-right">
              <b-badge
                variant="light-primary"
              >
                {{ numDownstreamAffiliates }} affiliates
              </b-badge>
            </span>
          </h5>
          <b-card-text
            class="font-small-4"
          >
            View information on your downstream affiliates and add new affiliates under you.
          </b-card-text>
          <b-link to="/affiliates">
            Affiliates
            <feather-icon
              size="16"
              icon="ArrowRightIcon"
            />
          </b-link>
        </b-card>
      </b-col>
      <b-col
        md="5"
        lg="5"
        xl="3"
      >
        <b-card>
          <h5 class="mb-1">
            View products
            <span class="float-right">
              <b-badge
                variant="light-primary"
              >
                {{ numProducts }} products
              </b-badge>
            </span>
          </h5>
          <b-card-text
            class="font-small-4"
          >
            View active Connexxion Telecom products and copy your referral link for your clients.
          </b-card-text>
          <b-link to="/products">
            Products
            <feather-icon
              size="16"
              icon="ArrowRightIcon"
            />
          </b-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import admin from '@/mixins/admin'
import product from '@/mixins/product'
import affiliate from '@/mixins/affiliate'
import commission from '@/mixins/commission'
import productSales from '@/mixins/product-sales'
import { mapGetters } from 'vuex'

export default {
  mixins: [admin, product, affiliate, commission, productSales],
  data() {
    return {
      greeting: null,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      numProducts: 'product/getNumProducts',
      numProductSales: 'productSales/getNumProductSales',
      numDownstreamAffiliates: 'affiliate/getNumDownstreamAffiliates',
      monthlyCommission: 'productSales/getMonthlyCommission',
    }),
  },
  created() {
    this.generateGreetings()
    const referralCode = this.$store.getters['auth/getUser'].ref_code
    const affiliateID = this.$store.getters['auth/getUser'].affiliate_id
    this.getAffiliateProducts()
    this.getMonthlyCommission(referralCode)
    this.getAffiliateProductSales(referralCode)
    this.getDownstreamAffiliates(affiliateID)
  },
  methods: {
    generateGreetings() {
      const today = new Date()
      const hrs = today.getHours()
      if (hrs < 12) this.greeting = 'Good morning'
      else if (hrs >= 12 && hrs <= 17) this.greeting = 'Good afternoon'
      else if (hrs >= 17 && hrs <= 24) this.greeting = 'Good evening'
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
