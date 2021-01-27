<template>
  <div>
    <b-row>
      <b-col
        xl="8"
        lg="8"
        md="12"
        sm="12"
      >
        <b-card title="Add New Product">
          <b-card-sub-title class="mb-2">
            Complete the form below to add this product to the AMP
          </b-card-sub-title>
          <validation-observer ref="addProductValidation">
            <b-form @submit.prevent>
              <b-row>
                <b-col
                  lg="8"
                  md="12"
                >
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
                <b-col
                  lg="8"
                  md="12"
                >
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
                <b-col
                  lg="8"
                  md="12"
                >
                  <b-form-group description="Allowed JPG, JPEG, PNG or GIF">
                    <label for="logo">Product Logo </label><span style="color: red"> *</span>
                    <validation-provider
                      #default="{ errors }"
                      name="product logo"
                      rules="required"
                    >
                      <b-form-file
                        id="logo"
                        v-model="logo"
                        accept="image/jpeg, image/png, image/gif, image/jpg"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="8"
                  md="12"
                >
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
                <b-col
                  lg="8"
                  md="12"
                >
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
                <b-col
                  lg="8"
                  md="12"
                  mt-2
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1"
                    @click="addProduct"
                  >
                    Add Product
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    :to="{ name: 'products' }"
                    variant="outline-warning"
                  >
                    Go Back
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </validation-observer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BButton, BCard, BCol, BForm, BFormGroup, BFormInput, BCardSubTitle, BRow, BFormTextarea, BFormFile,
} from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Ripple from 'vue-ripple-directive'
import product from '@/mixins/product'
import vSelect from 'vue-select'
import { required, url } from '@validations'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BCardSubTitle,
    BFormTextarea,
    BFormFile,
    ValidationObserver,
    ValidationProvider,
    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [product],
  data() {
    return {
      name: null,
      productUrl: null,
      category: null,
      description: '',
      categories: [
        { title: 'Software', value: 'Software' },
      ],
      logo: null,
      required,
      url,
    }
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
