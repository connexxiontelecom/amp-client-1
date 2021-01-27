<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="filter"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                id="add-btn"
                v-b-modal.add-plan
                variant="primary"
              >
                <span class="text-nowrap">Add Plan</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-table
        class="position-relative mb-0"
        :items="currentProductPlans"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        striped
        responsive
        show-empty
        @filtered="onFiltered"
      >
        <template #cell(plan_name)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                rounded
                src=""
                :text="avatarText(`${data.item.plan_name}`)"
                variant="light-warning"
                @click="openEditPlanModal(data.item)"
              />
            </template>
            <b-link
              class="font-weight-bold d-block text-nowrap text-capitalize"
              @click="openEditPlanModal(data.item)"
            >
              {{ data.item.plan_name }}
            </b-link>
            <small class="text-muted">{{ data.item.plan_link }}</small>
          </b-media>
        </template>
        <template #cell(plan_price)="data">
          &#8358; {{ parseInt(data.item.plan_price).toLocaleString('en') }}
        </template>
        <template #cell(plan_commission)="data">
          &#8358; {{ parseInt(data.item.plan_commission).toLocaleString('en') }}
        </template>
        <template #cell(actions)="data">
          <div class="text-nowrap">
            <feather-icon
              :id="`edit-${data.item.product_plan_id}`"
              v-b-tooltip.hover.top="'Edit'"
              icon="EditIcon"
              class="cursor-pointer"
              size="16"
              @click="openEditPlanModal(data.item)"
            />
            <feather-icon
              :id="`delete-${data.item.product_plan_id}`"
              v-b-tooltip.hover.top="'Delete'"
              icon="TrashIcon"
              class="ml-1 cursor-pointer"
              size="16"
              @click="deleteProductPlan(data.item)"
            />
          </div>
        </template>
      </b-table>
      <div class="mx-2 mb-2 mt-1">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">There are {{ numProductPlans }} product pricing plans</span>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              class="mb-0 mt-1 mt-sm-0"
            />
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-modal
      id="add-plan"
      ref="add-plan-modal"
      cancel-variant="outline-secondary"
      ok-title="Add Plan"
      cancel-title="Close"
      centered
      title="Add Product Plan"
      modal-class="modal-primary"
      @ok="handleAddOk"
    >
      <validation-observer ref="addPlanValidation">
        <b-form @submit.stop.prevent="handleAddOk">
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="name">Plan Name </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="name"
                  rules="required"
                >
                  <b-form-input
                    id="name"
                    v-model="planName"
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
                <label for="name">Plan Slug </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="slug"
                  rules="required"
                >
                  <b-form-input
                    id="slug"
                    v-model="planSlug"
                    :state="errors.length > 0 ? false:null"
                    name="slug"
                    placeholder="Slug"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="price">Plan Price </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="price"
                  rules="required"
                >
                  <b-form-input
                    id="price"
                    v-model="planPrice"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    name="price"
                    placeholder="Price"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="price">Plan Commission </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="commission"
                  rules="required"
                >
                  <b-form-input
                    id="commission"
                    v-model="planCommission"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    name="commission"
                    placeholder="Commission"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="price">Plan Link </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="link"
                  rules="required|url"
                >
                  <b-form-input
                    id="link"
                    v-model="planLink"
                    type="url"
                    :state="errors.length > 0 ? false:null"
                    name="link"
                    placeholder="http://product-plan-link.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-modal>
    <b-modal
      id="edit-plan"
      ref="edit-plan-modal"
      v-model="editModal"
      cancel-variant="outline-secondary"
      ok-title="Update Plan"
      cancel-title="Close"
      centered
      title="Update Product Plan"
      modal-class="modal-primary"
      @ok="handleEditOk"
    >
      <validation-observer ref="editPlanValidation">
        <b-form @submit.stop.prevent="handleEditOk">
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="name-view">Plan Name </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="name"
                  rules="required"
                >
                  <b-form-input
                    id="name-view"
                    v-model="planNameView"
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
                <label for="slug-view">Plan Slug </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="slug"
                  rules="required"
                >
                  <b-form-input
                    id="slug-view"
                    v-model="planSlugView"
                    :state="errors.length > 0 ? false:null"
                    name="slug"
                    placeholder="Slug"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="price-view">Plan Price </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="price"
                  rules="required"
                >
                  <b-form-input
                    id="price-view"
                    v-model="planPriceView"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    name="price"
                    placeholder="Price"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="commission-view">Plan Commission </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="commission"
                  rules="required"
                >
                  <b-form-input
                    id="commission-view"
                    v-model="planCommissionView"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    name="commission"
                    placeholder="Commission"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group>
                <label for="link-view">Plan Link </label><span style="color: red"> *</span>
                <validation-provider
                  #default="{ errors }"
                  name="link"
                  rules="required|url"
                >
                  <b-form-input
                    id="link-view"
                    v-model="planLinkView"
                    type="url"
                    :state="errors.length > 0 ? false:null"
                    name="link"
                    placeholder="http://product-plan-link.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-modal>
  </div>
</template>

<script>
import { avatarText } from '@core/utils/filter'
import { mapGetters } from 'vuex'
import {
  BAvatar,
  BButton,
  BCard,
  BCol, BForm, BFormGroup,
  BFormInput, BLink,
  BMedia, BModal,
  BPagination,
  BRow,
  BTable, VBModal, VBTooltip,
} from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import vSelect from 'vue-select'
import { required, url } from '@validations'
import product from '@/mixins/product'

export default {
  components: {
    BCard,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BTable,
    BFormInput,
    BButton,
    BPagination,
    BLink,
    BModal,
    BForm,
    BFormGroup,
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
      loaded: false,
      perPage: 5,
      perPageOptions: [5, 10, 25, 100],
      filter: null,
      totalRows: this.$store.getters['product/getCurrentProductPlans'].length,
      currentPage: 1,
      avatarText,
      required,
      url,
      fields: [
        { key: 'plan_name', label: 'name', sortable: true },
        { key: 'plan_slug', label: 'slug', sortable: true },
        { key: 'plan_price', label: 'price', sortable: true },
        { key: 'plan_commission', label: 'commission', sortable: true },
        { key: 'actions', thStyle: { width: '10%' } },
      ],
      planName: null,
      planPrice: null,
      planLink: null,
      planCommission: null,
      planSlug: null,
      productID: this.$router.currentRoute.params.productID,
      editModal: false,
      planNameView: null,
      planPriceView: null,
      planLinkView: null,
      planCommissionView: null,
      planSlugView: null,
      productIDView: null,
      productPlanID: null,
    }
  },
  computed: {
    ...mapGetters({
      currentProductPlans: 'product/getCurrentProductPlans',
      numProductPlans: 'product/getNumProductPlans',
    }),
  },
  watch: {
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    handleAddOk(e) {
      e.preventDefault()
      this.addPlan()
    },
    handleEditOk(e) {
      e.preventDefault()
      this.editPlan()
    },
    openEditPlanModal(plan) {
      this.planNameView = plan.plan_name
      this.planPriceView = plan.plan_price
      this.planLinkView = plan.plan_link
      this.planCommissionView = plan.plan_commission
      this.planSlugView = plan.plan_slug
      this.productIDView = plan.product_id
      this.productPlanID = plan.product_plan_id
      this.editModal = true
    },
    deleteProductPlan(plan) {
      this.productIDView = plan.product_id
      this.productPlanID = plan.product_plan_id
      this.deletePlan()
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
