<template>
  <p class="clearfix mb-0">
    <span class="float-md-right d-block d-md-inline-block mt-25">
      COPYRIGHT  © {{ new Date().getFullYear() }}
      <b-link
        class="ml-25"
        href="https://connexxiontelecom.com"
        target="_blank"
      >Connexxion Telecom</b-link>
      <span class="d-none d-sm-inline-block">, All Rights Reserved</span>
    </span>

    <span class="float-md-left d-none d-md-block">Affiliate Marketing Portal <strong class="text-danger">v0.1.2</strong></span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
