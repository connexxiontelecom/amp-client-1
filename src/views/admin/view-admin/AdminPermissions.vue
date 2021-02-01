<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Permissions</b-card-title>
      <b-card-sub-title>Permission according to roles</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
      :items="permissionsData"
      class="mb-0"
    >
      <template #cell(module)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <b-form-checkbox
          disabled
          :checked="data.value"
        />
      </template>
    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
  },
  data() {
    const permissions = this.$store.getters['admin/getCurrentAdmin'].roles
    return {
      permissionsData: [
        {
          module: 'Product',
          read: permissions.includes('prd_r'),
          write: permissions.includes('prd_w'),
          create: permissions.includes('prd_c'),
          delete: permissions.includes('prd_d'),
        },
        {
          module: 'Admin',
          read: permissions.includes('adm_r'),
          write: permissions.includes('adm_w'),
          create: permissions.includes('adm_c'),
          delete: permissions.includes('adm_d'),
        },
        {
          module: 'Commission',
          read: permissions.includes('com_r'),
          write: permissions.includes('com_w'),
          create: permissions.includes('com_c'),
          delete: permissions.includes('com_d'),
        },
        {
          module: 'Affiliate',
          read: permissions.includes('aff_r'),
          write: permissions.includes('aff_w'),
          create: permissions.includes('aff_c'),
          delete: permissions.includes('aff_d'),
        },
        {
          module: 'Product Sale',
          read: permissions.includes('pro_r'),
          write: permissions.includes('pro_w'),
          create: permissions.includes('pro_c'),
          delete: permissions.includes('pro_d'),
        },
        {
          module: 'Payment',
          read: permissions.includes('pay_r'),
          write: permissions.includes('pay_w'),
          create: permissions.includes('pay_c'),
          delete: permissions.includes('pay_d'),
        },
        {
          module: 'Audit Log',
          read: permissions.includes('log_r'),
          write: permissions.includes('log_w'),
          create: permissions.includes('log_c'),
          delete: permissions.includes('log_d'),
        },
      ],
    }
  },
}
</script>
