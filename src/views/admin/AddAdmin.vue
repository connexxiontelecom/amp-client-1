<template>
  <div>
    <b-row>
      <b-col cols-md="12">
        <b-card
          title="Add New Admin"
        >
          <validation-observer ref="addAdminValidation">
            <b-form
              @submit.prevent
            >
              <b-row>
                <b-col cols="8">
                  <b-form-group>
                    <label for="firstname">Firstname <span style="color: red"> *</span></label>
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
                        placeholder="firstname"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col cols="8">
                  <b-form-group>
                    <label for="lastname">Lastname <span style="color: red"> *</span></label>
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
                        placeholder="lastname"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col cols="8">
                  <b-form-group description="The admin username must be unique">
                    <label for="username">Username <span style="color: red"> *</span></label>
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
                        placeholder="username"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col cols="8">
                  <b-form-group>
                    <label for="password">Password <span style="color: red"> *</span></label>
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
                <b-col cols="8">
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
  BCard, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
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
