import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from '@/locales/i18n'

import './assets/iconfonts/iconfont.css'
import './styles/global.scss'
import './styles/reset.scss'
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/message/style/css'

const app = createApp(App)

app.use(i18n).use(router)

app.mount('#app')
