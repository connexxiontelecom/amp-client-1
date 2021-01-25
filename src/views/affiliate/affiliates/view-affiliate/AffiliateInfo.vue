<template>
  <b-card
    no-body
  >
    <b-card-header>
      <div>
        <b-card-title>Affiliate Information</b-card-title>
      </div>
    </b-card-header>
    <b-card-body>
      <table class="mt-2 mt-xl-0 w-100">
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="PhoneIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Phone</span>
          </th>
          <td
            v-if="currentAffiliate.affiliate_info"
            class="pb-50 text-uppercase"
          >
            {{ currentAffiliate.affiliate_info.phone }}
          </td>
        </tr>
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="CalendarIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">DOB</span>
          </th>
          <td
            v-if="currentAffiliate.affiliate_info"
            class="pb-50"
          >
            {{ new Date(currentAffiliate.affiliate_info.dob).toDateString() }}
          </td>
        </tr>
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="UserIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Gender</span>
          </th>
          <td
            v-if="currentAffiliate.affiliate_info"
            class="pb-50 text-capitalize"
          >
            {{ currentAffiliate.affiliate_info.gender }}
          </td>
        </tr>
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="MapIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Address</span>
          </th>
          <td
            v-if="currentAffiliate.affiliate_info"
            class="pb-50"
          >
            {{ currentAffiliate.affiliate_info.address }}
          </td>
        </tr>
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="FlagIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Country</span>
          </th>
          <td
            v-if="currentAffiliate.affiliate_info"
            class="pb-50"
          >
            {{ currentAffiliate.affiliate_info.country }}
          </td>
        </tr>
      </table>
    </b-card-body>
  </b-card>
</template>

<script>
/* eslint-disable object-property-newline */
import {
  BCard, BCardHeader, BCardTitle, BCardBody,
  VBTooltip, VBModal,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import affiliate from '@/mixins/affiliate'

export default {
  components: {
    BCard, BCardHeader, BCardTitle, BCardBody,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [affiliate],
  data() {
    let affiliateInfoID = 0
    let dob = null
    let mobile = null
    let gender = 'male'
    let address = null
    let country = null
    const affiliateInfo = this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_info
    if (affiliateInfo) {
      affiliateInfoID = affiliateInfo.affiliate_info_id
      dob = affiliateInfo.dob
      mobile = affiliateInfo.phone
      gender = affiliateInfo.gender
      address = affiliateInfo.address
      country = affiliateInfo.country
    }
    return {
      avatarText,
      affiliateID: this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_id,
      affiliateInfoID,
      dob,
      mobile,
      gender,
      address,
      country,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
}
</script>
