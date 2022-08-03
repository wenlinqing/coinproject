
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import DividingLine from '@/components/dividing-line.vue'
import notData from '@/components/notData.vue'
import request from 'units/request.js'

Vue.component('DividingLine',DividingLine)
Vue.component('notData',notData)

Vue.prototype.navTo=function(url){
	uni.navigateTo({
		url
	})
}
Vue.prototype.goBack=function(){
	uni.navigateBack({
		delta:1
	})
}
Vue.prototype.Toast = title =>{
	uni.showToast({
		title,
		icon: 'none'
	})
}

Vue.prototype.copyFun=function(txt){
	uni.setClipboardData({
		data:txt,
		success: () => {
			uni.showToast({
				title:'复制成功',
				icon: 'success'
			})
		},
		fail: () => {
			uni.showToast({
				title:'复制是吧',
				icon: 'error'
			})
		}
	})
}
Vue.prototype.timeBack=function(){
	setTimeout(()=>{
		uni.navigateBack({
			delta:1
		})
	},1500)
}


Vue.prototype.$request=request

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif