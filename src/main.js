import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//  Styles
import './assets/main.css'

// Composables
const app = createApp(App)

// Plugins
import vuetify from '@/plugins/vuetify'

app.use(router)
app.use(vuetify)

app.mount('#app')
