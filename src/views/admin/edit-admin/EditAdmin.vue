<template>
  <div>
    <b-alert
      v-if="!loaded"
      variant="warning"
      show
    >
      <h4 class="alert-heading">
        Application Error
      </h4>
      <div class="alert-body">
        <span>Sorry, reloading the application will cause it to lose some data. <b-link :to="{ name: 'admin-accounts' }">Go back to Admin Accounts</b-link></span>
      </div>
    </b-alert>
    <template v-if="loaded">
      <b-row>
        <b-col
          cols="12"
        >
          <b-card>
            <b-row>
              <b-col
                cols="12"
                xl="6"
                class="d-flex justify-content-between flex-column"
              >
                <div class="d-flex justify-content-start">
                  <b-avatar
                    :text="avatarText(`${currentAdmin.firstname +' '+ currentAdmin.lastname}`)"
                    variant="light-success"
                    size="104px"
                    rounded
                  />
                  <div class="d-flex flex-column ml-1">
                    <div class="mb-1">
                      <h4 class="mb-0">
                        {{ currentAdmin.firstname+' '+currentAdmin.lastname }}
                      </h4>
                      <span class="card-text">@{{ currentAdmin.username }}</span>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col cols="12">
                <validation-observer ref="editAdminValidation">
                  <b-form @submit.prevent>
                    <b-row>
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
                    </b-row>
                    <b-row>
                      <b-col cols="12">
                        <b-card
                          no-body
                          class="border mt-1"
                        >
                          <b-card-header class="p-1">
                            <b-card-title class="font-medium-2">
                              <feather-icon
                                icon="LockIcon"
                                size="18"
                              />
                              <span class="align-middle ml-50">Permissions</span>
                            </b-card-title>
                          </b-card-header>
                          <b-table
                            striped
                            responsive
                            class="mb-0"
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
                    <!-- Action Buttons -->
                    <b-button
                      variant="primary"
                      class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                      @click="updateAdmin"
                    >
                      Save Changes
                    </b-button>
                    <b-button
                      variant="outline-warning"
                      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                      :to="{ name: 'admin-accounts' }"
                    >
                      Go Back
                    </b-button>
                  </b-form>
                </validation-observer>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script>
import {
  BAlert,
  BLink,
  BRow,
  BCol,
  BCard,
  BAvatar,
  BForm,
  BFormGroup,
  BFormInput,
  BCardHeader,
  BCardTitle,
  BTable,
  BButton,
  BFormCheckboxGroup,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapGetters } from 'vuex'
import { required } from '@validations'
import admin from '@/mixins/admin'

export default {
  components: {
    BAlert,
    BLink,
    BRow,
    BCol,
    BCard,
    BAvatar,
    BForm,
    BFormGroup,
    BFormInput,
    BCardHeader,
    BCardTitle,
    BTable,
    BFormCheckboxGroup,
    BButton,
    ValidationObserver,
    ValidationProvider,
  },
  mixins: [admin],
  data() {
    return {
      avatarText,
      loaded: false,
      adminID: this.$store.getters['admin/getCurrentAdmin'].admin_id,
      firstname: this.$store.getters['admin/getCurrentAdmin'].firstname,
      lastname: this.$store.getters['admin/getCurrentAdmin'].lastname,
      roles: this.$store.getters['admin/getCurrentAdmin'].roles,
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
      required,
    }
  },
  computed: {
    ...mapGetters({
      currentAdmin: 'admin/getCurrentAdmin',
    }),
  },
  created() {
    if (this.$router.currentRoute.params.adminID) {
      this.loaded = true
    }
  },
}
</script>
