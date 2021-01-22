<template>
  <div>
    <b-row>
      <b-col
        xl="8"
        lg="8"
        md="12"
        sm="12"
      >
        <b-card title="Add New Affiliate">
          <b-card-sub-title class="mb-2">
            Complete the form below to add this affiliate account to the AMP. This affiliate will be associated with your account.
          </b-card-sub-title>
          <validation-observer ref="addDownstreamAffiliateValidation">
            <b-form @submit.prevent>
              <b-row>
                <b-col
                  lg="8"
                  md="12"
                >
                  <b-form-group>
                    <label for="firstname">Firstname </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="firstname"
                      rules="required"
                    >
                      <b-form-input
                        id="firstname"
                        v-model="firstname"
                        :state="errors.length > 0 ? false:null"
                        name="firstname"
                        placeholder="Firstname"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="8"
                  md="12"
                >
                  <b-form-group>
                    <label for="lastname">Lastname </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="lastname"
                      rules="required"
                    >
                      <b-form-input
                        id="lastname"
                        v-model="lastname"
                        :state="errors.length > 0 ? false:null"
                        name="lastname"
                        placeholder="Lastname"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="8"
                  md="12"
                >
                  <b-form-group description="The affiliate username must be unique">
                    <label for="username">Username </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="username"
                      rules="required"
                    >
                      <b-form-input
                        id="username"
                        v-model="username"
                        :state="errors.length > 0 ? false:null"
                        name="username"
                        placeholder="Username"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="8"
                  md="12"
                >
                  <b-form-group description="The affiliate email must be unique">
                    <label for="email">Email </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="email"
                      rules="required|email"
                    >
                      <b-form-input
                        id="email"
                        v-model="emailAddr"
                        type="email"
                        :state="errors.length > 0 ? false:null"
                        name="email"
                        placeholder="affiliate@email.com"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="8"
                  md="12"
                >
                  <b-form-group>
                    <label for="password">Password </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <b-form-input
                        id="password"
                        v-model="password"
                        type="password"
                        :state="errors.length > 0 ? false:null"
                        name="password"
                        placeholder="......................"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="8"
                  md="12"
                  class="mt-2"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1"
                    @click="addDownstreamAffiliate()"
                  >
                    Add Affiliate
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    :to="{ name: 'affiliates' }"
                    variant="outline-warning"
                  >
                    Go Back
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </validation-observer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import {
  BCard, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BCardSubTitle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import affiliate from '@/mixins/affiliate'
import vSelect from 'vue-select'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BCardSubTitle,
    ValidationObserver,
    ValidationProvider,
    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [affiliate],
  data() {
    return {
      firstname: null,
      lastname: null,
      username: null,
      password: null,
      emailAddr: null,
      upstreamAffiliate: this.$store.getters['auth/getUser'].affiliate_id,
      required,
      email,
    }
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
