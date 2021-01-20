<template>
  <div>
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
          <b-dropdown-item
            id="edit-bank-btn"
            v-b-modal.update-bank
          >
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
    <b-modal
      id="update-bank"
      ref="update-bank-modal"
      cancel-variant="outline-secondary"
      ok-title="Update Bank"
      cancel-title="Close"
      centered
      title="Update Affiliate Bank"
      modal-class="modal-primary"
      @ok="handleAffiliateBankUpdateOk"
    >
      <validation-observer ref="updateAffiliateBankValidation">
        <b-form @submit.stop.prevent="handleAffiliateBankUpdateOk">
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="name">Bank Name</label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="name"
                  rules="required"
                >
                  <b-form-input
                    id="name"
                    v-model="bankName"
                    :state="errors.length > 0 ? false:null"
                    name="name"
                    placeholder="Bank Name"
                  />
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="acc-name">Account Name</label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="acc-name"
                  rules="required"
                >
                  <b-form-input
                    id="acc-name"
                    v-model="bankAccountName"
                    :state="errors.length > 0 ? false:null"
                    name="acc-name"
                    placeholder="Bank Account Name"
                  />
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="acc-number">Account Number</label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="acc-number"
                  rules="required"
                >
                  <b-form-input
                    id="acc-number"
                    v-model="bankAccountNumber"
                    :state="errors.length > 0 ? false:null"
                    name="acc-number"
                    placeholder="Bank Account Number"
                  />
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import {
  BCard,
  BButton,
  BAvatar,
  BRow,
  BCol,
  BBadge,
  BCardHeader,
  BCardTitle,
  BDropdown,
  BDropdownItem,
  BCardBody,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  VBTooltip, VBModal,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import affiliate from '@/mixins/affiliate'
import { required } from '@validations'

export default {
  components: {
    BCard,
    BButton,
    BRow,
    BCol,
    BAvatar,
    BBadge,
    BCardHeader,
    BCardTitle,
    BDropdown,
    BDropdownItem,
    BCardBody,
    BModal,
    BForm,
    BFormGroup,
    BFormInput,
    ValidationObserver,
    ValidationProvider,
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
  methods: {
    handleAffiliateBankUpdateOk(e) {
      e.preventDefault()
      this.updateAffiliateBank()
    },
  },
}
</script>
