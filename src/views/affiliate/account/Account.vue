<template>
  <b-tabs
    vertical
    content-class="col-12 col-md-9 mt-1 mt-md-0"
    pills
    nav-wrapper-class="col-md-3 col-12"
    nav-class="nav-left"
  >
    <b-tab active>
      <template #title>
        <feather-icon
          icon="UserIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">General</span>
      </template>
      <account-general />
    </b-tab>
    <b-tab>
      <template #title>
        <feather-icon
          icon="InfoIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Information</span>
      </template>
      <account-info />
    </b-tab>
    <b-tab>
      <template #title>
        <feather-icon
          icon="CreditCardIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Bank</span>
      </template>
      <account-bank />
    </b-tab>
    <b-tab>
      <template #title>
        <feather-icon
          icon="LockIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">Change Password</span>
      </template>
    </b-tab>
  </b-tabs>
</template>

<script>
import {
  BTab, BTabs,
} from 'bootstrap-vue'
import AccountGeneral from './AccountGeneral.vue'
import AccountInfo from './AccountInfo.vue'
import AccountBank from './AccountBank.vue'

export default {
  components: {
    BTabs, BTab, AccountGeneral, AccountInfo, AccountBank,
  },
}
</script>
