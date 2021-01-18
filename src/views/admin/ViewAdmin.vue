<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router.currentRoute.params.adminID)
  },
}
</script>
