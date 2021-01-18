<template>
  <div>
    <b-row>
      <b-col
        xl="8"
        lg="8"
        md="12"
        sm="12"
      >
        <b-card title="Add New Admin">
          <b-card-sub-title class="mb-2">
            Complete the form below to add this admin account to the AMP
          </b-card-sub-title>
          <validation-observer ref="addAdminValidation">
            <b-form
              @submit.prevent
            >
              <b-row>
                <b-col cols="8">
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
                <b-col cols="8">
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
                <b-col cols="8">
                  <b-form-group description="The admin username must be unique">
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
                <b-col cols="8">
                  <b-form-group>
                    <label for="password">Password </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="password"
                      rules="required|min:5"
                    >
                      <b-form-input
                        id="password"
                        v-model="password"
                        type="password"
                        :state="errors.length > 0 ? false:null"
                        name="password"
                        placeholder="............"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col cols="8">
                  <b-form-group>
                    <label>Status </label><br>
                    <b-form-checkbox
                      v-model="status"
                      class="custom-control-success"
                      switch
                      inline
                    >
                      <span class="switch-icon-left">
                        <feather-icon icon="CheckIcon" />
                      </span>
                      <span class="switch-icon-right">
                        <feather-icon icon="XIcon" />
                      </span>
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
                <b-col
                  cols="8"
                  class="mt-2"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1"
                    @click="addAdmin"
                  >
                    Add Admin
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    :to="{ name: 'admin-accounts' }"
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
import { required } from '@validations'
import admin from '@/mixins/admin'

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
  },
  directives: {
    Ripple,
  },
  mixins: [admin],
  data() {
    return {
      firstname: null,
      lastname: null,
      username: null,
      password: null,
      status: true,
      required,
    }
  },
}
</script>
