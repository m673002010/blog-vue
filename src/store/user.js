export default {
	// 为当前模块开启命名空间
	namespaced: true,
	
	// 模块的state数据
	state: () => ({
		// 登录成功后获取token
		token: window.sessionStorage.getItem('token') || '',
		// 用户基本信息
		userInfo: window.sessionStorage.getItem('userInfo') ? JSON.parse(window.sessionStorage.getItem('userInfo')) : null
	}),
	
	// 模块的mutations方法
	mutations: {
		// 更新用户信息
		updateUserInfo (state, userInfo) {
			state.userInfo = userInfo
			window.sessionStorage.setItem('userInfo', userInfo)
		},
		// 更新token
		updateToken(state, token) {
			state.token = token
			window.sessionStorage.setItem('token', state.token)
		}
	},
	
	// 模块的getters属性
	getters: {}
}
