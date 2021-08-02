<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
        </b-link>

        <b-card-title class="mb-1">
          Welcome to <strong>AMP!</strong> 👋
        </b-card-title>
        <b-card-text class="mb-2">
          Please sign in with your credentials to access your account
        </b-card-text>

        <!-- form -->
        <validation-observer ref="loginValidation">
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent=""
          >
            <!-- username -->
            <b-form-group
              label="Username"
              label-for="login-username"
            >
              <validation-provider
                #default="{ errors }"
                name="username"
                rules="required"
              >
                <b-form-input
                  id="login-username"
                  v-model="username"
                  :state="errors.length > 0 ? false:null"
                  name="login-username"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- forgot password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="login-password">Password</label>
                <b-link :to="{name:'forgot-password'}">
                  <small>Forgot Password?</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                name="password"
                rules="required|min:5"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="login-password"
                    v-model="password"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    :type="passwordFieldType"
                    name="login-password"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
              >
                Remember Me
              </b-form-checkbox>
            </b-form-group>

            <!-- submit buttons -->
            <b-button
              type="submit"
              variant="primary"
              block
              @click="login"
            >
              Sign in
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>New on our platform? </span>
          <b-link :to="{name:'register'}">
            <span>Create an account</span>
          </b-link>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
import auth from '@/mixins/auth'

export default {
  components: {
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility, auth],
  data() {
    return {
      status: '',
      password: '',
      userEmail: '',
      username: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
