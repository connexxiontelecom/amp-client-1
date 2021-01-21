<template>
  <div>
    <b-card
      no-body
    >
      <b-table
        :items="allCommissions"
        responsive
        :fields="fields"
        class="mb-0"
      >
        <template #cell(num_gens)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded
                src=""
                :text="avatarText(`${data.item.num_gens}`)"
                variant="light-success"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.num_gens }} Max
            </b-link>
            <small class="text-muted">Generations</small>
          </b-media>
        </template>
        <template #cell(current_gen)="data">
          <b-badge variant="success text-center">
            <feather-icon
              v-if="data.item.current_gen === '1'"
              icon="CheckCircleIcon"
              variant="light-success"
              size="16"
            />
          </b-badge>
        </template>
        <template #cell(gen_1)="data">
          <strong>{{ data.item.gen_1 }}%</strong>
        </template>
        <template #cell(gen_2)="data">
          <strong>{{ data.item.gen_2 }}%</strong>
        </template>
        <template #cell(gen_3)="data">
          <strong>{{ data.item.gen_3 }}%</strong>
        </template>
        <template #cell(gen_4)="data">
          <strong>{{ data.item.gen_4 }}%</strong>
        </template>
        <template #cell(gen_5)="data">
          <strong>{{ data.item.gen_5 }}%</strong>
        </template>
        <template #cell(actions)="data">
          <div class="text-nowrap">
            <feather-icon
              :id="`view-${data.item.commission_id}`"
              v-b-tooltip.hover.top="'Select'"
              icon="CheckCircleIcon"
              size="16"
              class="cursor-pointer mx-1"
              @click="setCurrentGeneration(data.item.commission_id)"
            />
            <feather-icon
              :id="`edit-${data.item.commission_id}`"
              v-b-tooltip.hover.top="'Edit'"
              icon="EditIcon"
              class="cursor-pointer"
              size="16"
              @click="editCommission(data.item)"
            />
          </div>
        </template>
      </b-table>
    </b-card>
    <b-modal
      id="update-affiliate"
      ref="update-affiliate-modal"
      v-model="editModal"
      cancel-variant="outline-secondary"
      ok-title="Update Commissions"
      cancel-title="Close"
      centered
      :title="'Edit '+commissionNumGens+' Max Generations'"
      modal-class="modal-primary"
      @ok="submitEdit"
    >
      <b-card-text>
        Note, percentage commissions must sum up to 100%
      </b-card-text>
      <div>
        <label for="gen-1">Affiliate Retains</label>
        <b-form-spinbutton
          id="gen-1"
          v-model="commissionGen1"
          min="0"
          max="100"
          class="mb-1"
        />
      </div>
      <div>
        <label for="gen-2">1st Gen Upstream</label>
        <b-form-spinbutton
          id="gen-2"
          v-model="commissionGen2"
          size="sm"
          min="0"
          max="100"
          class="mb-1"
        />
      </div>
      <div v-if="commissionNumGens > 1">
        <label for="gen-3">2nd Gen Upstream</label>
        <b-form-spinbutton
          id="gen-3"
          v-model="commissionGen3"
          size="sm"
          min="0"
          max="100"
          class="mb-1"
        />
      </div>
      <div v-if="commissionNumGens > 2">
        <label for="gen-4">3rd Gen Upstream</label>
        <b-form-spinbutton
          id="gen-4"
          v-model="commissionGen4"
          size="sm"
          min="0"
          max="100"
          class="mb-1"
        />
      </div>
      <div v-if="commissionNumGens > 3">
        <label for="gen-5">4th Gen Upstream</label>
        <b-form-spinbutton
          id="gen-5"
          v-model="commissionGen5"
          size="sm"
          min="0"
          max="100"
          class="mb-1"
        />
      </div>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable radix */
import {
  BTable, BCard, BMedia, BAvatar, BLink, VBTooltip, BBadge, BModal, VBModal, BCardText, BFormSpinbutton,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import { avatarText } from '@core/utils/filter'
import commission from '@/mixins/commission'

export default {
  components: {
    BTable,
    BCard,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BModal,
    BCardText,
    BFormSpinbutton,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [commission],
  data() {
    return {
      editModal: false,
      fields: [
        { key: 'num_gens', label: 'Max Generations' },
        { key: 'current_gen', label: 'Current' },
        { key: 'gen_1', label: 'Retained' },
        { key: 'gen_2', label: '1st Gen' },
        { key: 'gen_3', label: '2nd Gen' },
        { key: 'gen_4', label: '3rd Gen' },
        { key: 'gen_5', label: '4th Gen' },
        { key: 'actions', thStyle: { width: '10%' } },
      ],
      avatarText,
      // commission: null,
      commissionID: null,
      commissionNumGens: null,
      commissionGen1: null,
      commissionGen2: null,
      commissionGen3: null,
      commissionGen4: null,
      commissionGen5: null,
    }
  },
  computed: {
    ...mapGetters({
      allCommissions: 'commission/getAllCommissions',
    }),
  },
  methods: {
    editCommission(currCommission) {
      // this.commission = commission
      this.commissionID = currCommission.commission_id
      this.commissionNumGens = parseInt(currCommission.num_gens)
      this.commissionGen1 = parseInt(currCommission.gen_1)
      this.commissionGen2 = parseInt(currCommission.gen_2)
      this.commissionGen3 = parseInt(currCommission.gen_3)
      this.commissionGen4 = parseInt(currCommission.gen_4)
      this.commissionGen5 = parseInt(currCommission.gen_5)
      this.editModal = true
    },
  },
}
</script>
