<template>
    <div class="login-main">
        <el-form ref="loginFormRef" :rules="loginFormRules" :model='loginForm' class="login_form">
            <el-form-item prop="account" label="账号">
                <el-input v-model="loginForm.account" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input v-model="loginForm.password" prefix-icon="el-icon-key" type="password"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="login">确定</el-button>
                <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            loginForm: {
                account: '',
                password: ''
            },
            loginFormRules: {
                account: [ { required: true, message: '请输入用户名' }],
                password: [ { required: true, message: '请输入密码' } ]
            }
        }
    },
    methods: {
        resetLoginForm() {
            this.$refs.loginFormRef.resetFields()
        },
        login() {
            this.$refs.loginFormRef.validate(async (value) => {
                const { data: result } = await this.$http.post('/user/login', this.loginForm)
                if (+result.code === 0) {
                    this.$message.success('登录成功')
                    
                    // 登录成功，存储token和用户信息
                    this.updateToken(result.data.token)
                    this.updateUserInfo(JSON.stringify({ 
                        username: result.data.username,
                        account: result.data.account
                    }))

                    this.$router.push('/home')
                }
                else this.$message.error('登录失败')
            })
            this.$refs.loginFormRef.resetFields()
        },
        ...mapMutations('mUser', ['updateUserInfo', 'updateToken'])
    },
}
</script>

<style scoped>
.login-main {
    height: 100vh;
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login_form {
    height: 30%;
    width: 20%;
}
</style>
