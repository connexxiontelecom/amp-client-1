<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
        </b-link>

        <b-card-title class="mb-1">
          Welcome to <strong>AMP</strong> 🚀
        </b-card-title>
        <b-card-text class="mb-2">
          Register below to join our global network of marketers that earn passively by marketing our products.
        </b-card-text>

        <!-- form -->
        <validation-observer ref="registerValidation">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <b-row>
              <b-col lg="6">
                <!-- firstname -->
                <b-form-group>
                  <label for="firstname">Firstname</label><span style="color: red"> *</span>
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
                      placeholder="John"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <!-- lastname -->
                <b-form-group>
                  <label for="lastname">Lastname</label><span style="color: red"> *</span>
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
                      placeholder="Doe"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="6">
                <!-- username -->
                <b-form-group>
                  <label for="username">Username</label><span style="color: red"> *</span>
                  <validation-provider
                    #default="{ errors }"
                    name="Username"
                    rules="required"
                  >
                    <b-form-input
                      id="username"
                      v-model="username"
                      :state="errors.length > 0 ? false:null"
                      name="register-username"
                      placeholder="johndoe"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <!-- email -->
                <b-form-group>
                  <label for="email">Email</label><span style="color: red"> *</span>
                  <validation-provider
                    #default="{ errors }"
                    name="Email"
                    rules="required|email"
                  >
                    <b-form-input
                      id="email"
                      v-model="regEmail"
                      :state="errors.length > 0 ? false:null"
                      name="register-email"
                      placeholder="john@example.com"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="6">
                <!-- password -->
                <b-form-group>
                  <label for="password">Password</label><span style="color: red"> *</span>
                  <validation-provider
                    #default="{ errors }"
                    name="password"
                    rules="required"
                  >
                    <b-input-group
                      class="input-group-merge"
                      :class="errors.length > 0 ? 'is-invalid':null"
                    >
                      <b-form-input
                        id="password"
                        v-model="password"
                        :type="passwordFieldType"
                        :state="errors.length > 0 ? false:null"
                        class="form-control-merge"
                        name="password"
                        placeholder="············"
                      />
                      <b-input-group-append is-text>
                        <feather-icon
                          :icon="passwordToggleIcon"
                          class="cursor-pointer"
                          @click="togglePasswordVisibility"
                        />
                      </b-input-group-append>
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <!-- confirm password -->
                <b-form-group>
                  <label for="confirm-password">Confirm Password</label><span style="color: red"> *</span>
                  <validation-provider
                    #default="{ errors }"
                    name="confirm password"
                    rules="required|confirmed:password"
                  >
                    <b-input-group
                      class="input-group-merge"
                      :class="errors.length > 0 ? 'is-invalid':null"
                    >
                      <b-form-input
                        id="confirm-password"
                        v-model="confirmPassword"
                        :type="passwordFieldType"
                        :state="errors.length > 0 ? false:null"
                        class="form-control-merge"
                        name="confirm-password"
                        placeholder="············"
                      />
                      <b-input-group-append is-text>
                        <feather-icon
                          :icon="passwordToggleIcon"
                          class="cursor-pointer"
                          @click="togglePasswordVisibility"
                        />
                      </b-input-group-append>
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
            </b-row>
            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="register-privacy-policy"
                v-model="status"
                name="checkbox-1"
                class="mt-1"
              >
                I have read and understood the
                <b-link to="/privacy-policy">
                  Privacy Policy
                </b-link>
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              block
              class="mt-2"
              @click="register"
            >
              Sign Up & Start Earning
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Already have an account? </span>
          <b-link :to="{name:'login'}">
            <span>Sign in instead</span>
          </b-link>
        </b-card-text>
      </b-card>
      <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BCard, BLink, BCardTitle, BCardText, BForm,
  BButton, BFormInput, BFormGroup, BInputGroup, BInputGroupAppend, BFormCheckbox,
  BRow, BCol,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email, confirmed } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import auth from '@/mixins/auth'

export default {
  components: {
    VuexyLogo,
    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    BRow,
    BCol,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility, auth],
  data() {
    return {
      firstname: '',
      lastname: '',
      regEmail: '',
      username: '',
      password: '',
      confirmPassword: '',
      status: '',

      // validation rules
      required,
      email,
      confirmed,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    validationForm() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
