<template>
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
</template>
<script>
import {
  BCard, BButton, BAvatar, BRow, BCol, BBadge,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import affiliate from '@/mixins/affiliate'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar, BBadge,
  },
  mixins: [affiliate],
  data() {
    return {
      avatarText,
    }
  },
  computed: {
    ...mapGetters({
      currentAffiliate: 'affiliate/getCurrentAffiliate',
    }),
  },
  methods: {
    clicked() {
      console.log(this.$store.getters['affiliate/getCurrentAffiliate'].status)
      this.toggleStatus(this.$store.getters['affiliate/getCurrentAffiliate'].status, this.$store.getters['affiliate/getCurrentAffiliate'].affiliate_id)
    },
  },
}
</script>
