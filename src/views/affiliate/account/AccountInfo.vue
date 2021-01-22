<template>
  <b-card>
    <b-card-title>
      Information
    </b-card-title>
    <validation-observer ref="editInfoValidation">
      <b-form
        class="mt-2"
        @submit.prevent
      >
        <b-row>
          <b-col sm="6">
            <b-form-group>
              <label for="dob">Birth Date</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="dob"
                rules="required"
              >
                <b-form-input
                  id="dob"
                  v-model="dob"
                  type="date"
                  :state="errors.length > 0 ? false:null"
                  name="dob"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group>
              <label for="mobile">Phone</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="mobile"
                rules="required"
              >
                <b-form-input
                  id="mobile"
                  v-model="mobile"
                  type="number"
                  :state="errors.length > 0 ? false:null"
                  name="mobile"
                  placeholder="Phone"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group>
              <label for="address">Address</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="address"
                rules="required"
              >
                <b-form-input
                  id="address"
                  v-model="address"
                  :state="errors.length > 0 ? false:null"
                  name="address"
                  placeholder="Address"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group>
              <label for="country">Country</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="country"
                rules="required"
              >
                <b-form-input
                  id="country"
                  v-model="country"
                  :state="errors.length > 0 ? false:null"
                  name="country"
                  placeholder="Country"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group>
              <label for="country">Gender</label>
              <b-form-radio
                v-model="gender"
                name="gender"
                value="male"
              >
                Male
              </b-form-radio>
              <b-form-radio
                v-model="gender"
                name="gender"
                value="female"
              >
                Female
              </b-form-radio>
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
              @click="updateInfo()"
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
  BCard, BButton, BForm, BRow, BCol, BFormGroup, BFormInput, BCardTitle, BFormRadio,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
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
    BFormRadio,
  },
  directives: {
    Ripple,
  },
  mixins: [affiliate],
  data() {
    let affiliateInfoID = 0
    let dob = null
    let mobile = null
    let gender = 'male'
    let address = null
    let country = null
    const affiliateInfo = this.$store.getters['auth/getUser'].affiliate_info
    if (affiliateInfo) {
      affiliateInfoID = affiliateInfo.affiliate_info_id
      dob = affiliateInfo.dob
      mobile = affiliateInfo.phone
      gender = affiliateInfo.gender
      address = affiliateInfo.address
      country = affiliateInfo.country
    }
    return {
      affiliateID: this.$store.getters['auth/getUser'].affiliate_id,
      affiliateInfoID,
      dob,
      mobile,
      gender,
      address,
      country,
    }
  },
}
</script>
