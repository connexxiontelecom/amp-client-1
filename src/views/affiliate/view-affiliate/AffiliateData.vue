<template>
  <div>
    <b-card>
      <b-row>
        <b-col
          cols="21"
          xl="6"
          class="d-flex justify-content-between flex-column"
        >
          <div class="d-flex justify-content-start">
            <b-avatar
              :text="avatarText(`${currentAffiliate.firstname +' '+ currentAffiliate.lastname}`)"
              variant="light-success"
              size="104px"
              rounded
            />
            <div class="d-flex flex-column ml-1">
              <div class="mb-1">
                <h4 class="mb-0">
                  {{ currentAffiliate.firstname+' '+currentAffiliate.lastname }}
                </h4>
                <span class="card-text">{{ currentAffiliate.email }}</span>
              </div>
              <div class="d-flex flex-wrap">
                <b-button
                  id="edit-affiliate-btn"
                  v-b-modal.update-affiliate
                  variant="primary"
                >
                  Edit
                </b-button>
                <b-button
                  v-if="this.$store.getters['affiliate/getCurrentAffiliate'].status === '0'"
                  variant="outline-success"
                  class="ml-1"
                  @click="clicked"
                >
                  Reactivate
                </b-button>
                <b-button
                  v-else-if="this.$store.getters['affiliate/getCurrentAffiliate'].status === '1'"
                  variant="outline-danger"
                  class="ml-1"
                  @click="clicked"
                >
                  Deactivate
                </b-button>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center mt-2">
            <div class="d-flex align-items-center mr-2">
              <b-avatar
                variant="light-success"
                rounded
              >
                <feather-icon
                  icon="PackageIcon"
                  size="18"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                  0
                </h5>
                <small>Product Sales</small>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <b-avatar
                variant="light-primary"
                rounded
              >
                <feather-icon
                  icon="TrendingUpIcon"
                  size="18"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                  &#8358; 0
                </h5>
                <small>Total Commission</small>
              </div>
            </div>
          </div>
        </b-col>
        <b-col
          cols="12"
          xl="6"
        >
          <table class="mt-2 mt-xl-0 w-100">
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="UserIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Username</span>
              </th>
              <td class="pb-50">
                @{{ currentAffiliate.username }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="CheckIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Status</span>
              </th>
              <td class="pb-50 text-capitalize">
                <b-badge
                  v-if="currentAffiliate.status === '1'"
                  pill
                  variant="light-success"
                  class="text-capitalize"
                >
                  Active
                </b-badge>
                <b-badge
                  v-if="currentAffiliate.status === '0'"
                  pill
                  variant="light-danger"
                  class="text-capitalize"
                >
                  Inactive
                </b-badge>
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Referral Code</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ currentAffiliate.ref_code }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="CalendarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Added</span>
              </th>
              <td class="pb-50">
                {{ new Date(currentAffiliate.created_at).toDateString() }}
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-card>
    <b-modal
      id="update-affiliate"
      ref="update-affiliate-modal"
      cancel-variant="outline-secondary"
      ok-title="Update Affiliate"
      cancel-title="Close"
      centered
      title="Update Affiliate Account"
      modal-class="modal-primary"
      @ok="handleAccountUpdateOk"
    >
      <validation-observer ref="updateAffiliateAccountValidation">
        <b-form @submit.stop.prevent="handleAccountUpdateOk">
          <b-row>
            <b-col cols="12">
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
            <b-col cols="12">
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
            <b-col cols="12">
              <b-form-group>
                <label for="email">Email </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="email"
                    v-model="emailAddr"
                    :state="errors.length > 0 ? false:null"
                    name="email"
                    placeholder="affiliate@email.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="upstream">Upstream Affiliate </label>
                <v-select
                  id="upstream"
                  v-model="upstreamAffiliate"
                  :options="upstreamAffiliates"
                  label="title"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-modal>
  </div>
</template>
<script>
import {
  BCard, BButton, BAvatar, BRow, BCol, BBadge, BModal, BForm, VBModal, VBTooltip, BFormGroup, BFormInput,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import affiliate from '@/mixins/affiliate'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email } from '@validations'
import vSelect from 'vue-select'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BCard, BButton, BRow, BCol, BAvatar, BBadge, BModal, BForm, BFormGroup, BFormInput, ValidationProvider, ValidationObserver, vSelect,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [affiliate],
  data() {
    let upstreamAffiliate = null
    const currentUpstreamAffiliate = this.$store.getters['affiliate/getCurrentAffiliate'].upstream_affiliate
    if (currentUpstreamAffiliate) {
      upstreamAffiliate = { title: currentUpstreamAffiliate.username, value: currentUpstreamAffiliate.affiliate_id }
    }
    return {
      avatarText,
      affiliateID: this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_id,
      firstname: this.$store.getters['affiliate/getCurrentAffiliate'].firstname,
      lastname: this.$store.getters['affiliate/getCurrentAffiliate'].lastname,
      emailAddr: this.$store.getters['affiliate/getCurrentAffiliate'].email,
      upstreamAffiliate,
      upstream: null,
      upstreamAffiliates: [],
      required,
      email,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
  created() {
    this.getAffiliateOptions()
  },
  methods: {
    clicked() {
      this.toggleStatus(this.$store.getters['affiliate/getCurrentAffiliate'].status, this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_id)
    },
    getAffiliateOptions() {
      const affiliates = this.$store.getters['affiliate/getAllAffiliates']
      affiliates.forEach(_affiliate => {
        if (_affiliate.affiliate_id !== this.affiliateID) {
          this.upstreamAffiliates.push({ title: _affiliate.username, value: _affiliate.affiliate_id })
        }
      })
    },
    handleAccountUpdateOk(e) {
      e.preventDefault()
      this.updateAffiliateAccount()
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
