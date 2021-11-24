import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import api from './http/api'
createApp(App)
  .use(router)
  .use(store)
  .use(elementPlus)
  .use(api)
  .mount('#app')
