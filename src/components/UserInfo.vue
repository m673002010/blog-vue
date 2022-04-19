<template>
    <div class="userInfo" @click="gotoPersonal">
        <div class="username">{{user.username}}</div>
        <div class="account">{{user.account}}</div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
        user:{
            type: Object,
            default: {}
        }
  },
  data () {
    return {}
  },
  methods: {
      gotoPersonal() {
          this.$router.push({path: '/personal', query: {
              userId: this.user.userId
          }})
      }
  }
}
</script>

<style scoped>
    .userInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        border: 1px solid;
    }
</style>
