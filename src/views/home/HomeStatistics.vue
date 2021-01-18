<template>
  <b-card
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-title>AMP Overview</b-card-title>
      <b-card-text class="font-small-2 mr-25 mb-0">
        Updated {{ new Date().toLocaleTimeString() }}
      </b-card-text>
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>
        <b-col
          xl="3"
          sm="6"
        >
          <b-media
            no-body
            class="cursor-pointer"
            @click="$router.push({ name: 'admin-accounts' })"
          >
            <b-media-aside
              class="mr-2"
            >
              <b-avatar
                size="48"
                variant="light-primary"
              >
                <feather-icon
                  size="24"
                  icon="BriefcaseIcon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ numAdmins }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
                Admins
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
  },
  computed: {
    ...mapGetters({
      numAdmins: 'admin/getNumAdmins',
    }),
  },
}
</script>
