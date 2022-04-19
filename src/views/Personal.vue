<template>
  <div class="Personal">
    <h1>{{ userId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data () {
    return {
      userId: 0
    }
  },
  mounted: function () {
    this.userId = this.$route.query.userId
  }
}
</script>

<style scoped>
</style>
