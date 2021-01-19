<template>
  <b-card
    no-body
  >
    <b-card-header>
      <div>
        <b-card-title>Affiliate Information</b-card-title>
      </div>
      <b-dropdown
        variant="link"
        no-caret
        class="chart-dropdown"
        toggle-class="p-0"
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item :to="{ name: 'admin-accounts' }">
          Edit Information
        </b-dropdown-item>
      </b-dropdown>
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
          <td class="pb-50 text-uppercase">
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
          <td class="pb-50">
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
          <td class="pb-50 text-capitalize">
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
          <td class="pb-50">
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
          <td class="pb-50">
            {{ currentAffiliate.affiliate_info.country }}
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
