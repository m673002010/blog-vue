<template>
  <div class="article">
    <div v-show="false">{{article.id}}</div>
    <div class="title">{{article.title}}</div>
    <div class="author">{{article.author}}</div>
    <div class="viewCount">{{article.viewCount}}</div>
    <div class="createAt">{{article.createAt}}</div>
  </div> 
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {}
  },
  methods: {
      gotoDetail(id) {
          this.$router.push({ path: `/views/ArticleDetail/${id}` })
      }
  }
}
</script>

<style scoped>
  .article {
    margin: 20px;
    border: 1px solid;
  }
</style>
