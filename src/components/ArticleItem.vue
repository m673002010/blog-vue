<template>
  <div>
    {{id}}
    {{title}}
    {{author}}
    {{viewCount}}
    {{createAt}}
  </div> 
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    id: Number,
    title: String,
    author: String,
    viewCount: Number,
    createAt: String
  },
  data () {
    return {}
  },
  methods: {
      gotoDetail(id) {
          this.$router.push({ path: `/view/${id}` })
      }
  }
}
</script>

<style scoped>
</style>
