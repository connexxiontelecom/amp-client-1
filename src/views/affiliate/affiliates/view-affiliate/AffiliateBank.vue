<template>
  <b-card
    no-body
  >
    <b-card-header>
      <div>
        <b-card-title>Affiliate Bank</b-card-title>
      </div>
    </b-card-header>
    <b-card-body>
      <table class="mt-2 mt-xl-0 w-100">
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="GridIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Name</span>
          </th>
          <td
            v-if="currentAffiliate.bank"
            class="pb-50 text-uppercase"
          >
            {{ currentAffiliate.bank.bank_name }}
          </td>
        </tr>
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="UserIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Account Name</span>
          </th>
          <td
            v-if="currentAffiliate.bank"
            class="pb-50"
          >
            {{ currentAffiliate.bank.bank_acc_name }}
          </td>
        </tr>
        <tr>
          <th class="pb-50">
            <feather-icon
              icon="CreditCardIcon"
              class="mr-75"
            />
            <span class="font-weight-bold">Account Number</span>
          </th>
          <td
            v-if="currentAffiliate.bank"
            class="pb-50 text-capitalize"
          >
            {{ currentAffiliate.bank.bank_acc_number }}
          </td>
        </tr>
      </table>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardTitle,
  BCardBody,
  VBTooltip, VBModal,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import affiliate from '@/mixins/affiliate'
import { required } from '@validations'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [affiliate],
  data() {
    let bankID = 0
    let bankName = null
    let bankAccountName = null
    let bankAccountNumber = null
    const { bank } = this.$store.getters['affiliate/getCurrentAffiliate']
    if (bank) {
      bankID = bank.bank_id
      bankName = bank.bank_name
      bankAccountName = bank.bank_acc_name
      bankAccountNumber = bank.bank_acc_number
    }
    return {
      avatarText,
      affiliateID: this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_id,
      bankID,
      bankName,
      bankAccountName,
      bankAccountNumber,
      required,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
}
</script>
