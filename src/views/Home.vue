<template>
  <div class="Home">
      <div class="header">
        <user-info v-if="token && userInfo" :user="userInfo"></user-info>
      </div>

      <div class="main">
        <div class="main-body">
          <article-item v-for="item in articleList" :key="item.id" :article="item"></article-item>
        </div>

        <div class="main-aside"></div>
      </div>

    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import ArticleItem from "../components/ArticleItem.vue"
import GoTop from "../components/GoTop.vue"
import UserInfo from "../components/UserInfo.vue"

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ArticleItem,
    GoTop,
    UserInfo
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
      ],
      // ...mapState('mUser', ['token', 'userInfo'])
    }
  },
  methods: {},
  computed: {
    ...mapState('mUser', ['token', 'userInfo'])
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    background-color: #E9EEF3;
  }
  
  .main {
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .main-body {
    height: 100%;
    width: 800px;
    background-color: #E6E6E6;
    margin-right: 20px;
  }
  
  .main-aside {
    height: 100%;
    width: 300px;
    background-color: #D8D8D8;
    margin-left: 20px;
  }

</style>
