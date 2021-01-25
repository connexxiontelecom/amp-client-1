<template>
  <b-card>
    <b-card-title>
      Change Password
    </b-card-title>
    <validation-observer ref="changePasswordValidation">
      <b-form
        class="mt-2"
        @submit.prevent
      >
        <b-row>
          <!-- old password -->
          <b-col md="6">
            <b-form-group>
              <label for="password">Current Password</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="password"
                rules="required"
              >
                <b-input-group class="input-group-merge">
                  <b-form-input
                    id="password"
                    v-model="password"
                    name="password"
                    :type="passwordFieldType"
                    placeholder="Current Password"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIconOld"
                      class="cursor-pointer"
                      @click="togglePasswordOld"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!--/ old password -->
        </b-row>
        <b-row>
          <!-- new password -->
          <b-col md="6">
            <b-form-group>
              <label for="new-password">New Password</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="new-password"
                rules="required|min:5"
              >
                <b-input-group class="input-group-merge">
                  <b-form-input
                    id="new-password"
                    v-model="newPassword"
                    :type="newPasswordFieldType"
                    name="new-password"
                    placeholder="New Password"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIconNew"
                      class="cursor-pointer"
                      @click="togglePasswordNew"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!--/ new password -->

          <!-- retype password -->
          <b-col md="6">
            <b-form-group>
              <label for="confirm-password">Confirm Password</label><span style="color: red"> *</span>
              <validation-provider
                #default="{ errors }"
                name="confirm-password"
                rules="required|confirmed:new-password"
              >
                <b-input-group class="input-group-merge">
                  <b-form-input
                    id="confirm-password"
                    v-model="confirmPassword"
                    :type="confirmPasswordFieldType"
                    name="confirm-password"
                    placeholder="New Password"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIconRetype"
                      class="cursor-pointer"
                      @click="togglePasswordRetype"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!--/ retype password -->

          <!-- buttons -->
          <b-col
            class="text-right"
            cols="12"
          >
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mt-2 mr-1"
              @click="changePassword()"
            >
              Save changes
            </b-button>
          </b-col>
          <!--/ buttons -->
        </b-row>
      </b-form>
    </validation-observer>
  </b-card>
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BInputGroup, BInputGroupAppend, BCardTitle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import affiliate from '@/mixins/affiliate'
import { required, confirmed } from '@validations'

export default {
  components: {
    BButton,
    ValidationObserver,
    ValidationProvider,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BInputGroup,
    BInputGroupAppend,
    BCardTitle,
  },
  directives: {
    Ripple,
  },
  mixins: [affiliate],
  data() {
    return {
      affiliateID: this.$store.getters['auth/getUser'].affiliate_id,
      password: '',
      newPassword: '',
      confirmPassword: '',
      passwordFieldType: 'password',
      newPasswordFieldType: 'password',
      confirmPasswordFieldType: 'password',
      required,
      confirmed,
    }
  },
  computed: {
    passwordToggleIconOld() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    passwordToggleIconNew() {
      return this.newPasswordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    passwordToggleIconRetype() {
      return this.confirmPasswordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    togglePasswordOld() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    togglePasswordNew() {
      this.newPasswordFieldType = this.newPasswordFieldType === 'password' ? 'text' : 'password'
    },
    togglePasswordRetype() {
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password'
    },
  },
}
</script>
