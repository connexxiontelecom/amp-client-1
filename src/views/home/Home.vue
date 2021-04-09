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
            <h5>Verify your account </h5>
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
            <h5>Manage affiliates</h5>
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
            <h5>View product sales</h5>
            <b-card-text
              class="font-small-4"
            >
              Track product sales made through your referrals and your total commission due for the sales.
            </b-card-text>
            <b-link to="/affiliates">
              Product Sales
              <feather-icon
                size="16"
                icon="ArrowRightIcon"
              />
            </b-link>
          </b-card>
        </b-col>
      </b-row>
      <b-alert
        variant="dark"
        show=""
        class="mt-1 mb-2"
      >
        <h4 class="alert-heading">
          Market Products Quickly
        </h4>
        <div class="alert-body">
          Copy the referral link from any of our products below and give to your prospective clients. <br>
          Any purchase made through your referral link is credited to you and you will receive 10% of the proceeds as commission up to your 5th client.
          <br>
          <span class="font-weight-bolder">For every 5th client every month, you will receive 100% of the proceeds.</span>
        </div>
      </b-alert>
      <b-row>
        <b-col
          v-for="product in products"
          :key="product.product_id"
          lg="2"
          cols="6"
        >
          <b-card
            no-body
          >
            <b-card-header>
              <div>
                <b-card-title>
                  <b-avatar
                    rounded=""
                    size="32"
                    :src="api.endpoint+'/uploads/products/'+product.logo"
                    :text="avatarText(`${product.name}`)"
                    variant="light-info"
                  />
                  <span class="ml-25 font-medium-1 text-uppercase">
                    <b-link
                      :href="product.url"
                      target="_blank"
                    >
                      {{ product.name }}
                    </b-link>
                  </span>
                </b-card-title>
              </div>
              <feather-icon
                v-b-tooltip.hover.top="'Copy Link'"
                icon="CopyIcon"
                size="14"
                class="cursor-pointer"
                @click="copyReferralLink(product)"
              />
            </b-card-header>
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
      else if (hrs >= 17 && hrs <= 24) this.greeting = 'Good Evening'
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
