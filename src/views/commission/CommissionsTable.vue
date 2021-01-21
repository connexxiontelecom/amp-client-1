<template>
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
            @click="getAffiliate(data.item.affiliate_id)"
          />
          <feather-icon
            :id="`edit-${data.item.commission_id}`"
            v-b-tooltip.hover.top="'Edit'"
            icon="EditIcon"
            class="cursor-pointer"
            size="16"
          />
        </div>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import {
  BTable, BCard, BMedia, BAvatar, BLink, VBTooltip, BBadge,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import { avatarText } from '@core/utils/filter'

export default {
  components: {
    BTable,
    BCard,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      fields: [
        { key: 'num_gens', label: 'Max Generations' },
        { key: 'current_gen', label: 'Selected' },
        { key: 'gen_1', label: 'Retained' },
        { key: 'gen_2', label: '1st Gen' },
        { key: 'gen_3', label: '2nd Gen' },
        { key: 'gen_4', label: '3rd Gen' },
        { key: 'gen_5', label: '4th Gen' },
        { key: 'actions', thStyle: { width: '10%' } },
      ],
      avatarText,
    }
  },
  computed: {
    ...mapGetters({
      allCommissions: 'commission/getAllCommissions',
    }),
  },
}
</script>
