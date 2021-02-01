<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout="vertical"
      finish-button-text="Add Admin"
      back-button-text="Go Back"
      class="wizard-vertical mb-3 pb-1"
      @on-complete="addAdmin"
    >
      <tab-content
        title="Account Details"
        :before-change="validationForm"
      >
        <validation-observer
          ref="accountRules"
          tag="form"
        >
          <b-row>
            <b-col
              cols="12"
              class="mb-2"
            >
              <h5 class="mb-0">
                Account Details
              </h5>
              <small class="text-muted">
                Enter admin account details
              </small>
            </b-col>
            <b-col
              md="6"
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
              md="6"
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
              md="6"
            >
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
            <b-col
              md="6"
            >
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
            <b-col
              md="6"
            >
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
          </b-row>
        </validation-observer>
      </tab-content>
      <tab-content
        title="Permissions"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Permissions
            </h5>
            <small class="text-muted">
              Select account permissions
            </small>
          </b-col>
          <b-col cols="12">
            <b-card
              no-body
              class="border"
            >
              <b-table
                striped
                responsive
                class="mb-0"
                :fields="fields"
                :items="permissionsData"
              >
                <template #cell(module)="data">
                  {{ data.value }}
                </template>
                <template #cell(roles)="data">
                  <b-form-checkbox-group
                    v-model="roles"
                    :options="data.value"
                    value-field="item"
                    text-field="name"
                  />
                </template>
              </b-table>
            </b-card>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import {
  BCard, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BFormCheckboxGroup, BForm, BButton, BCardSubTitle, BTable,
} from 'bootstrap-vue'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
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
    BFormCheckboxGroup,
    BForm,
    BButton,
    BCardSubTitle,
    FormWizard,
    TabContent,
    BTable,
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
      fields: [
        { key: 'module', label: 'module' },
        { key: 'options', label: 'Roles' },
      ],
      roles: [],
      permissionsData: [
        {
          module: 'Product',
          roles: [
            { item: 'prd_r', name: 'Read' },
            { item: 'prd_w', name: 'Write' },
            { item: 'prd_c', name: 'Create' },
            { item: 'prd_d', name: 'Delete' },
          ],
        },
        {
          module: 'Admin',
          roles: [
            { item: 'adm_r', name: 'Read' },
            { item: 'adm_w', name: 'Write' },
            { item: 'adm_c', name: 'Create' },
            { item: 'adm_d', name: 'Delete' },
          ],
        },
        {
          module: 'Commission',
          roles: [
            { item: 'com_r', name: 'Read' },
            { item: 'com_w', name: 'Write' },
            { item: 'com_c', name: 'Create' },
            { item: 'com_d', name: 'Delete' },
          ],
        },
        {
          module: 'Affiliate',
          roles: [
            { item: 'aff_r', name: 'Read' },
            { item: 'aff_w', name: 'Write' },
            { item: 'aff_c', name: 'Create' },
            { item: 'aff_d', name: 'Delete' },
          ],
        },
        {
          module: 'Product Sale',
          roles: [
            { item: 'pro_r', name: 'Read' },
            { item: 'pro_w', name: 'Write' },
            { item: 'pro_c', name: 'Create' },
            { item: 'pro_d', name: 'Delete' },
          ],
        },
        {
          module: 'Payment',
          roles: [
            { item: 'pay_r', name: 'Read' },
            { item: 'pay_w', name: 'Write' },
            { item: 'pay_c', name: 'Create' },
            { item: 'pay_d', name: 'Delete' },
          ],
        },
        {
          module: 'Audit Log',
          roles: [
            { item: 'log_r', name: 'Read' },
            { item: 'log_w', name: 'Write' },
            { item: 'log_c', name: 'Create' },
            { item: 'log_d', name: 'Delete' },
          ],
        },
      ],
    }
  },
  methods: {
    validationForm() {
      return new Promise((resolve, reject) => {
        this.$refs.accountRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            this.toast('Add Admin Attempt', 'BellIcon', 'You must fill in all form fields correctly', 'warning')
            reject()
          }
        })
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
