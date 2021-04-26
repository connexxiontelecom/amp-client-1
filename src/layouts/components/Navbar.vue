<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <b-badge
        variant="primary"
        class="badge-glow"
      >
        Affiliate Portal
      </b-badge>
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <dark-toggler class="d-lg-block" />
      <notification-dropdown />
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ user.firstname+' '+user.lastname }}
            </p>
            <span class="user-status">@{{ user.username }}</span>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="profilePicture"
            :text="avatarText(user.firstname+' '+user.lastname)"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>

        <b-dropdown-item
          link-class="d-flex align-items-center"
          to="/account"
        >
          <feather-icon
            size="16"
            icon="UserIcon"
            class="mr-50"
          />
          <span>Account</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="logout"
        >
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import NotificationDropdown from '@core/layouts/components/app-navbar/components/NotificationDropdown.vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import { avatarText } from '@core/utils/filter'
import auth from '@/mixins/auth'
import { mapGetters } from 'vuex'
import api from '@/api-config'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,

    // Navbar Components
    // Bookmarks,
    NotificationDropdown,
    DarkToggler,
  },
  mixins: [auth],
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      avatarText,
      profilePicture: `${api.endpoint}/uploads/affiliates/${this.$store.getters['auth/getUser'].profile_pic}`,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
  },
}
</script>
