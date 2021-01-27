<template>
  <div>
    <b-alert
      v-if="!loaded"
      variant="warning"
      show
    >
      <h4 class="alert-heading">
        Application Error
      </h4>
      <div class="alert-body">
        <span>Sorry, reloading the application will cause it to lose some data. <b-link :to="{ name: 'products' }">Go back to Products</b-link></span>
      </div>
    </b-alert>
    <div v-if="loaded">
      <b-row>
        <b-col
          cols="12"
        >
          <b-card no-body>
            <b-card-header>
              <div>
                <b-card-title>Product Details</b-card-title>
              </div>
              <b-dropdown
                v-if="isAdmin"
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
                  id="edit-product-btn"
                  v-b-modal.update-product
                >
                  Update Product
                </b-dropdown-item>
                <b-dropdown-item
                  v-if="currentProduct.status === '0'"
                  @click="clicked"
                >
                  Reactivate Product
                </b-dropdown-item>
                <b-dropdown-item
                  v-else-if="currentProduct.status === '1'"
                  @click="clicked"
                >
                  Deactivate Product
                </b-dropdown-item>
              </b-dropdown>
            </b-card-header>

            <b-row class="py-2 px-3">
              <b-col
                cols="12"
                xl="4"
                class="d-flex justify-content-between flex-column"
              >
                <div class="d-flex justify-content-start">
                  <b-avatar
                    ref="productLogo"
                    :src="logo"
                    :text="avatarText(`${currentProduct.name}`)"
                    variant="light-success"
                    size="104px"
                    rounded
                  />
                  <div class="d-flex flex-column ml-1">
                    <div class="mb-1">
                      <h4 class="mb-0 text-uppercase">
                        {{ currentProduct.name }}
                      </h4>
                      <span class="text-muted card-text">{{ currentProduct.category }}</span>
                    </div>
                    <div
                      v-if="isAdmin"
                      class="d-flex flex-wrap"
                    >
                      <b-button
                        variant="primary"
                        size="sm"
                        @click="$refs.refInputEl.click()"
                      >
                        <input
                          ref="refInputEl"
                          type="file"
                          class="d-none"
                          accept="image/jpeg, image/png, image/gif, image/jpg"
                          @change="updateLogo"
                        >
                        <span class="d-none d-sm-inline">Update</span>
                        <feather-icon
                          icon="EditIcon"
                          class="d-inline d-sm-none"
                        />
                      </b-button>
                      <b-button
                        variant="outline-secondary"
                        size="sm"
                        class="ml-1"
                        @click="removeImage"
                      >
                        Remove
                      </b-button>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-2">
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
                        0 <small class="text-muted">Sales</small>
                      </h5>
                      <small>Activity</small>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col
                cols="12"
                xl="8"
              >
                <table class="mt-2 mt-xl-0 w-100">
                  <tr>
                    <th class="pb-50">
                      <feather-icon
                        icon="PackageIcon"
                        class="mr-75"
                      />
                      <span class="font-weight-bold">Name</span>
                    </th>
                    <td class="pb-50 text-uppercase">
                      {{ currentProduct.name }}
                    </td>
                  </tr>
                  <tr>
                    <th class="pb-50">
                      <feather-icon
                        icon="LinkIcon"
                        class="mr-75"
                      />
                      <span class="font-weight-bold">URL</span>
                    </th>
                    <td class="pb-50">
                      <a :href="currentProduct.url">{{ currentProduct.url }}</a>
                    </td>
                  </tr>
                  <tr>
                    <th class="pb-50">
                      <feather-icon
                        icon="FlagIcon"
                        class="mr-75"
                      />
                      <span class="font-weight-bold">Category</span>
                    </th>
                    <td class="pb-50">
                      {{ currentProduct.category }}
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
                        v-if="currentProduct.status === '1'"
                        pill
                        variant="light-success"
                        class="text-capitalize"
                      >
                        Active
                      </b-badge>
                      <b-badge
                        v-if="currentProduct.status === '0'"
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
                        icon="ListIcon"
                        class="mr-75"
                      />
                      <span class="font-weight-bold">Pricing Plans</span>
                    </th>
                    <td class="pb-50">
                      {{ numProductPlans }} Plans
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
                      {{ new Date(currentProduct.created_at).toDateString() }}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <feather-icon
                        icon="AlignJustifyIcon"
                        class="mr-75"
                      />
                      <span class="font-weight-bold">Description</span>
                    </th>
                    <td>
                      {{ currentProduct.description }}
                    </td>
                  </tr>
                </table>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <product-plans />
        </b-col>
      </b-row>
    </div>
    <b-modal
      id="update-product"
      ref="update-product-modal"
      cancel-variant="outline-secondary"
      ok-title="Update Product"
      cancel-title="Close"
      centered
      title="Update Product"
      modal-class="modal-primary"
      @ok="handleProductUpdateOk"
    >
      <validation-observer ref="updateProductValidation">
        <b-form @submit.prevent="handleProductUpdateOk">
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="name">Product Name </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="name"
                  rules="required"
                >
                  <b-form-input
                    id="name"
                    v-model="name"
                    :state="errors.length > 0 ? false:null"
                    name="name"
                    placeholder="Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="category">Product Category </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="category"
                  rules="required"
                >
                  <v-select
                    id="category"
                    v-model="category"
                    :options="categories"
                    label="title"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="url">Product URL </label>
                <validation-provider
                  #default="{ errors }"
                  name="product URL"
                  rules="url"
                >
                  <b-form-input
                    id="url"
                    v-model="productUrl"
                    :state="errors.length > 0 ? false:null"
                    name="productUrl"
                    placeholder="https://product-url.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="description">Description</label>
                <b-form-textarea
                  id="description"
                  v-model="description"
                  placeholder="Brief description of product"
                  rows="3"
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
  BCard, BAlert, BLink, BRow, BCol, BBadge, VBTooltip, VBModal, BAvatar, BButton,
  BForm, BFormGroup, BFormInput, BFormTextarea, BCardHeader, BDropdown, BDropdownItem, BCardTitle,
} from 'bootstrap-vue'
import product from '@/mixins/product'
import { mapGetters } from 'vuex'
import { avatarText } from '@core/utils/filter'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import api from '@/apiConfig'
import vSelect from 'vue-select'
import { required, url } from '@validations'
import ProductPlans from './ProductPlans.vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BDropdown,
    BDropdownItem,
    BAlert,
    BBadge,
    BRow,
    BCol,
    BLink,
    ProductPlans,
    BAvatar,
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BFormTextarea,
    BCardTitle,
    ValidationObserver,
    ValidationProvider,
    vSelect,
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
  mixins: [product],
  data() {
    return {
      api,
      productID: this.$store.getters['product/getCurrentProduct'].product_id,
      name: this.$store.getters['product/getCurrentProduct'].name,
      productUrl: this.$store.getters['product/getCurrentProduct'].url,
      category: this.$store.getters['product/getCurrentProduct'].category,
      categories: [
        { title: 'Software', value: 'Software' },
      ],
      description: this.$store.getters['product/getCurrentProduct'].description,
      logo: `${api.endpoint}/uploads/${this.$store.getters['product/getCurrentProduct'].logo}`,
      loaded: false,
      avatarText,
      required,
      url,
    }
  },
  computed: {
    ...mapGetters({
      currentProduct: 'product/getCurrentProduct',
      numProductPlans: 'product/getNumProductPlans',
      isAdmin: 'auth/getIsAdmin',
    }),
  },
  created() {
    if (this.$router.currentRoute.params.productID) {
      this.loaded = true
    }
  },
  methods: {
    clicked() {
      this.toggleStatus(this.$store.getters['product/getCurrentProduct'].status, this.$store.getters['product/getCurrentProduct'].product_id)
    },
    handleProductUpdateOk(e) {
      e.preventDefault()
      this.updateProduct()
    },
    updateLogo(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
      this.updateProductLogo(files[0])
    },
    createImage(file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.logo = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage() {
      this.logo = null
      this.removeProductLogo()
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
