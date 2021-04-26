<template>
  <b-card>
    <b-media no-body>
      <b-media-aside>
        <b-avatar
          ref="profilePicture"
          :src="profilePicture"
          :text="avatarText(firstname+' '+lastname)"
          variant="light-primary"
          size="104px"
          rounded=""
        />
      </b-media-aside>
      <b-media-body class="mt-75 ml-75">
        <b-button
          variant="primary"
          size="sm"
          class="mb-75 mr-75"
          @click="$refs.refInputEl2.click()"
        >
          <input
            ref="refInputEl2"
            type="file"
            class="d-none"
            accept="image/jpeg, image/png, image/gif, image/jpg"
            @change="updatePicture"
          >
          Upload
        </b-button>
        <b-button
          variant="outline-secondary"
          size="sm"
          class="mb-75 mr-75"
          @click="removeImage"
        >
          Remove
        </b-button>
      </b-media-body>
    </b-media>
    <validation-observer ref="editAccountValidation">
      <b-form
        class="mt-2"
        @submit.prevent
      >
        <b-row>
          <b-col sm="6">
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
          <b-col sm="6">
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
          <b-col sm="6">
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
                  type="email"
                  :state="errors.length > 0 ? false:null"
                  name="email"
                  placeholder="affiliate@email.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group>
              <label for="ref-code">Referral Code </label>
              <b-form-input
                id="ref-code"
                v-model="referralCode"
                name="refCode"
                disabled
                placeholder="affiliate@email.com"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            class="mt-75"
          >
            <b-alert
              v-if="profile === '0'"
              show
              variant="warning"
              class="mb-50"
            >
              <h4 class="alert-heading">
                Your email is not confirmed. Please check your inbox.
              </h4>
              <div class="alert-body">
                <b-link
                  class="alert-link"
                  @click="resendConfirmation"
                >
                  Resend confirmation
                </b-link>
              </div>
            </b-alert>
          </b-col>
          <b-col
            class="text-right"
            cols="12"
          >
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mt-2 mr-1"
              @click="updateAccount()"
            >
              Save Changes
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </b-card>

</template>

<script>
import {
  BCard, BMedia, BMediaBody, BButton, BMediaAside, BLink, BForm, BRow, BCol, BFormGroup, BFormInput, BAlert,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { avatarText } from '@core/utils/filter'
import { required, email } from '@validations'
import affiliate from '@/mixins/affiliate'
import api from '@/api-config'

export default {
  components: {
    BCard,
    BMedia,
    BMediaBody,
    BButton,
    BMediaAside,
    BLink,
    ValidationObserver,
    ValidationProvider,
    BForm,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BAlert,
  },
  directives: {
    Ripple,
  },
  mixins: [affiliate],
  data() {
    return {
      avatarText,
      affiliateID: this.$store.getters['auth/getUser'].affiliate_id,
      firstname: this.$store.getters['auth/getUser'].firstname,
      lastname: this.$store.getters['auth/getUser'].lastname,
      emailAddr: this.$store.getters['auth/getUser'].email,
      referralCode: this.$store.getters['auth/getUser'].ref_code,
      profile: this.$store.getters['auth/getUser'].profile,
      verifyCode: this.$store.getters['auth/getUser'].verify_code,
      profilePicture: `${api.endpoint}/uploads/affiliates/${this.$store.getters['auth/getUser'].profile_pic}`,
      required,
      email,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
  },
  methods: {
    updatePicture(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
      this.updateProfilePicture(files[0])
    },
    createImage(file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.profilePicture = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage() {
      this.profilePicture = null
      this.removeProfilePicture()
    },
  },
}
</script>
