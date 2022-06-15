
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import DividingLine from '@/components/dividing-line.vue'
import notData from '@/components/notData.vue'
Vue.component('DividingLine',DividingLine)
Vue.component('notData',notData)

Vue.prototype.navTo=function(url){
	uni.navigateTo({
		url
	})
}

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