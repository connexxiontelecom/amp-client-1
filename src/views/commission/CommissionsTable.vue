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
    </b-table>
  </b-card>
</template>

<script>
import {
  BTable, BCard, BMedia, BAvatar, BLink,
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
  },
  data() {
    return {
      fields: [
        { key: 'num_gens', label: 'Max Generations' },
        { key: 'gen_1', label: 'Affiliate Retaining' },
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
