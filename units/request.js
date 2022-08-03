
// var baseUrl = 'http://localhost:4000' // 测试环境 http://weitingshop.cngo.com:9999/  https://mjgb.mojivip.com
// const baseUrl = 'http://193.84.249.253:4120/api'
// var baseUrl = 'http://weitingshop.cngo.com:9999'
import Vue from 'vue'

// #ifdef H5
var baseUrl = '/api'
// #endif
// #ifdef APP-PLUS
var baseUrl ="http://119.91.47.185:903/api"
// #endif

function request(options){
	// var userInfo=uni.getStorageSync('userInfo')?JSON.parse(uni.getStorageSync('userInfo')):{}
	let headers={
		"Content-Type" : "application/x-www-form-urlencoded"
	}
	// headers['Authorization'] = uni.getStorageSync('token')||'';

	return new Promise((res,rej)=>{
		// console.log(baseUrl + options.url+'?token='+uni.getStorageSync('token'))
		uni.request({
			url:baseUrl + options.url,
			// url:options.url,
			method:options.method || 'GET',
			data:{
				...options.data,
				token:uni.getStorageSync('token')||''
			},
			// sslVerify: false,
			header:headers,
			success(response) {
				// console.log('response=====', response.data)
				if(response.data.code==200){
					res(response.data)
				}else if(response.data.code==400){
					/* uni.removeStorageSync('isLogin')
					uni.removeStorageSync('token')
					uni.removeStorageSync('userInfo') */
					uni.showToast({
						title: '登录已失效',
						icon: "none"
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/login/login'
						})
					},1500)
					uni.hideLoading()
					// return
					// rej(response.data)
				}else{
					// uni.showToast({
					// 	title: response.data.msg,
					// 	icon: "none"
					// })
					rej(response.data)
				}
			},
			fail(err) {
				uni.showToast({
					title: '系统错误',
					icon: "none"
				})
				rej(err)
			}
		})
	})
}
export default request;