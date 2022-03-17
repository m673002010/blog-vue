<template>
  <div class="Home">
    <el-container>
      <!-- 主体区 -->
      <el-main>
        <article-item v-for="article in articleList" :key="article.id" v-bind="article"></article-item>
      </el-main>

      <!-- 侧边栏 -->
      <el-aside></el-aside>
    </el-container>

    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem"
import GoTop from "@/components/GoTop"

export default {
  name: 'Home',
  components: {
    "article-item": ArticleItem,
    "go-top": GoTop
  },
  data () {
    return {
      articleList: [
        {
          id: 1,
          title: '文章1',
          author: 'admin',
          viewCount: 8,
          createAt: '2022-03-15 18:00:00'
        },
        {
          id: 2,
          title: '文章2',
          author: 'admin',
          viewCount: 20,
          createAt: '2022-03-13 19:00:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
