import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import titleMixin from '@/components/title'
import VueCurrencyInput from 'vue-currency-input'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)

Vue.use(VueCurrencyInput, {
  globalOptions: {
    currency: {
      prefix: 'Rp'
    },
    precision: 0
  },
  componentName: 'MoneyInput' // now you can use the component with <money-input/>
})
Vue.mixin(titleMixin)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
