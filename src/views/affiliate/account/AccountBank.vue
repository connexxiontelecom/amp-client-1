<template>
  <b-card>
    <b-card-title>
      Bank
    </b-card-title>
    <validation-observer ref="editBankValidation">
      <b-form
        class="mt-2"
        @submit.prevent
      >
        <b-row>
          <b-col sm="6">
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
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6" />
          <b-col sm="6">
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
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6">
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
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col
            class="text-right"
            cols="12"
          >
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mt-2 mr-1"
              @click="updateBank()"
            >
              Save Changes
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BForm, BRow, BCol, BFormGroup, BFormInput, BCardTitle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { required } from '@validations'
import affiliate from '@/mixins/affiliate'

export default {
  components: {
    BCard,
    BButton,
    ValidationObserver,
    ValidationProvider,
    BForm,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BCardTitle,
  },
  directives: {
    Ripple,
  },
  mixins: [affiliate],
  data() {
    let bankID = 0
    let bankName = null
    let bankAccountName = null
    let bankAccountNumber = null
    const { bank } = this.$store.getters['auth/getUser']
    if (bank) {
      bankID = bank.bank_id
      bankName = bank.bank_name
      bankAccountName = bank.bank_acc_name
      bankAccountNumber = bank.bank_acc_number
    }
    return {
      affiliateID: this.$store.getters['auth/getUser'].affiliate_id,
      bankID,
      bankName,
      bankAccountName,
      bankAccountNumber,
      required,
    }
  },
}
</script>
