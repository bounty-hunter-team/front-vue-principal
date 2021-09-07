import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import titleMixin from './router/titleMixin'

createApp(App).mixin(titleMixin).use(router).mount('#app')
