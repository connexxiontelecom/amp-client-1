<template>
  <div>
    <div
      v-if="isAffiliate"
    >
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
                  0 sales
                </b-badge>
              </span>
            </h5>
            <b-card-text
              class="font-small-4"
            >
              <h3 class="mt-1 mb-1">
                &#8358; 0.00
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
                  variant="light-success"
                >
                  <feather-icon
                    icon="CheckIcon"
                    class="mr-25"
                  />
                  verified
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
                  0 affiliates
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
                  0 products
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
    <div v-else-if="isAdmin">
      <b-jumbotron class="px-lg-5">
        <template #header>
          <span class="font-large-3">
            AMP Admin
          </span>
        </template>
        <template #lead>
          {{ greeting }} {{ user.firstname }} {{ user.lastname }}, pick up where you left off managing the AMP system.
        </template>
<!--        <p>-->
<!--          It uses utility classes for typography and spacing to space content out within the larger-->
<!--          container.-->
<!--        </p>-->
        <b-button
          variant="primary"
          to="/product-sales"
        >
          Product Sales
        </b-button>
      </b-jumbotron>
      <h5 class="mt-3 mb-2">
        Configure AMP
      </h5>
      <b-row>
        <b-col
          md="5"
          lg="5"
          xl="3"
        >
          <b-card>
            <h5>Manage products</h5>
            <b-card-text
              class="font-small-4"
            >
              The products are central to AMP. Add and manage products to the AMP system.
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
        <b-col
          md="5"
          lg="5"
          xl="3"
        >
          <b-card>
            <h5>Manage Affiliates</h5>
            <b-card-text
              class="font-small-4"
            >
              View, manage, and add information for the affiliate marketers on the AMP system.
            </b-card-text>
            <b-link to="/affiliate-accounts">
              Affiliate Accounts
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
            <h5>
              Manage admins
<!--              <feather-icon-->
<!--                v-b-tooltip.hover.top="'Copy Link...........'"-->
<!--                icon="CopyIcon"-->
<!--                size="14"-->
<!--                class="cursor-pointer ml-auto float-right"-->
<!--              />-->
            </h5>
            <b-card-text
              class="font-small-4"
            >
              Add and manage admin accounts including permissions on the AMP system.
            </b-card-text>
            <b-link to="/admin-accounts">
              Admin Accounts
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
            <h5>Manage Commission</h5>
            <b-card-text
              class="font-small-4"
            >
              View and manage how commissions are shared among the affiliates on the AMP system.
            </b-card-text>
            <b-link to="/commission">
              Commission
              <feather-icon
                size="16"
                icon="ArrowRightIcon"
              />
            </b-link>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import admin from '@/mixins/admin'
import product from '@/mixins/product'
import affiliate from '@/mixins/affiliate'
import commission from '@/mixins/commission'
import { mapGetters } from 'vuex'
import { avatarText } from '@core/utils/filter'
import api from '@/api-config'

export default {
  mixins: [admin, product, affiliate, commission],
  data() {
    return {
      greeting: null,
      avatarText,
      api,
      referralLink: null,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      isAdmin: 'auth/getIsAdmin',
      isAffiliate: 'auth/getIsAffiliate',
      products: 'product/getAllProducts',
    }),
  },
  created() {
    this.generateGreetings()
    if (this.$store.getters['auth/getIsAdmin']) {
      this.getAdmins()
      this.getAffiliates()
      this.getPlanCommissions()
      this.getCommissions()
    } else if (this.$store.getters['auth/getIsAffiliate']) {
      this.getProducts()
    }
  },
  methods: {
    generateGreetings() {
      const today = new Date()
      const hrs = today.getHours()
      if (hrs < 12) this.greeting = 'Good morning'
      else if (hrs >= 12 && hrs <= 17) this.greeting = 'Good afternoon'
      else if (hrs >= 17 && hrs <= 24) this.greeting = 'Good evening'
    },
    copyReferralLink(currentProduct) {
      // console.log(currentProduct)
      this.referralLink = `${currentProduct.registration_link}/${this.$store.getters['auth/getUser'].ref_code}`
      this.$copyText(this.referralLink).then().catch()
      this.toast('Copied Referral Link!', 'CopyIcon', '', 'success')
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
