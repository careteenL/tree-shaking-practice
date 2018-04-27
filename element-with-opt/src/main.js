// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import {Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 更具体
// import {Button} from 'element-ui/lib/button.js'
// import 'element-ui/lib/theme-chalk/base.css'
// import 'element-ui/lib/theme-chalk/button.css'

Vue.config.productionTip = false

Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
