<template>
  <b-card>
    <h5>Welcome, <strong class="text-primary">@{{ user.username }}!</strong> 🎉 </h5>
    <b-card-text class="font-small-4">
      This is your admin dashboard
    </b-card-text>
    <h3 class="mb-75 mt-2 pt-50">
      {{ new Date().toDateString() }}
    </h3>
    <b-button variant="primary">
      View Sales
    </b-button>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BButton,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BCard,
    BCardText,
    BButton,
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
  },
}
</script>
