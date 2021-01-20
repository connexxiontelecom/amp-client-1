<template>
  <div>
    <b-card
      no-body
    >
      <b-card-header>
        <div>
          <b-card-title>Affiliate Information</b-card-title>
        </div>
        <b-dropdown
          variant="link"
          no-caret
          class="chart-dropdown"
          toggle-class="p-0"
          dropleft
        >
          <template #button-content>
            <feather-icon
              icon="MoreVerticalIcon"
              size="18"
              class="text-body cursor-pointer"
            />
          </template>
          <b-dropdown-item
            id="edit-info-btn"
            v-b-modal.update-info
          >
            Edit Information
          </b-dropdown-item>
        </b-dropdown>
      </b-card-header>
      <b-card-body>
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="PhoneIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Phone</span>
            </th>
            <td
              v-if="currentAffiliate.affiliate_info"
              class="pb-50 text-uppercase"
            >
              {{ currentAffiliate.affiliate_info.phone }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CalendarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">DOB</span>
            </th>
            <td
              v-if="currentAffiliate.affiliate_info"
              class="pb-50"
            >
              {{ new Date(currentAffiliate.affiliate_info.dob).toDateString() }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Gender</span>
            </th>
            <td
              v-if="currentAffiliate.affiliate_info"
              class="pb-50 text-capitalize"
            >
              {{ currentAffiliate.affiliate_info.gender }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="MapIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Address</span>
            </th>
            <td
              v-if="currentAffiliate.affiliate_info"
              class="pb-50"
            >
              {{ currentAffiliate.affiliate_info.address }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Country</span>
            </th>
            <td
              v-if="currentAffiliate.affiliate_info"
              class="pb-50"
            >
              {{ currentAffiliate.affiliate_info.country }}
            </td>
          </tr>
        </table>
      </b-card-body>
    </b-card>
    <b-modal
      id="update-info"
      ref="update-info-modal"
      cancel-variant="outline-secondary"
      ok-title="Update Information"
      cancel-title="Close"
      centered
      title="Update Affiliate Information"
      modal-class="modal-primary"
      @ok="handleAffiliateInfoUpdateOk"
    >
      <validation-observer ref="updateAffiliateInformationValidation">
        <b-form @submit.stop.prevent="handleAffiliateInfoUpdateOk">
          <b-row>
            <b-col cols="12">
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
            <b-col cols="12">
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
            <b-col cols="12">
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
            <b-col cols="12">
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
            <b-col cols="12">
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
          </b-row>
        </b-form>
      </validation-observer>
    </b-modal>
  </div>
</template>
<script>
/* eslint-disable object-property-newline */
import {
  BCard, BButton, BAvatar, BRow, BCol, BBadge, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody, BModal,
  BForm, BFormGroup, BFormInput, VBTooltip, VBModal, BFormRadio,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import affiliate from '@/mixins/affiliate'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BCard, BButton, BRow, BCol, BAvatar, BBadge, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody, BModal,
    BForm, BFormGroup, ValidationObserver, ValidationProvider, BFormInput, BFormRadio,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [affiliate],
  data() {
    let affiliateInfoID = 0
    let dob = null
    let mobile = null
    let gender = null
    let address = null
    let country = null
    const affiliateInfo = this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_info
    if (affiliateInfo) {
      affiliateInfoID = affiliateInfo.affiliate_info_id
      dob = affiliateInfo.dob
      mobile = affiliateInfo.phone
      gender = affiliateInfo.gender
      address = affiliateInfo.address
      country = affiliateInfo.country
    }
    return {
      avatarText,
      affiliateID: this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_id,
      affiliateInfoID,
      dob,
      mobile,
      gender,
      address,
      country,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
  methods: {
    handleAffiliateInfoUpdateOk(e) {
      e.preventDefault()
      this.updateAffiliateInfo()
    },
  },
}
</script>
