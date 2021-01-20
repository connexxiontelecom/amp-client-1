<template>
  <b-card
    no-body
  >
    <b-card-header>
      <div>
        <b-card-title>Affiliate Bank</b-card-title>
      </div>
      <b-dropdown
        variant="link"
        no-caret
        class="chart-dropdown"
        toggle-class="p-0"
        dropleft
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item :to="{ name: 'admin-accounts' }">
          Edit Bank
        </b-dropdown-item>
      </b-dropdown>
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
          <td class="pb-50 text-uppercase">
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
          <td class="pb-50">
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
          <td class="pb-50 text-capitalize">
            {{ currentAffiliate.bank.bank_acc_number }}
          </td>
        </tr>
      </table>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol, BBadge, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BCard, BButton, BRow, BCol, BAvatar, BBadge, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody,
  },
  data() {
    return {
      avatarText,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
}
</script>
