// Lib
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Components
import App from './App.vue'
import router from './router/router'

// Plugins
import {loadFonts} from "@/plugins/webfontloader";
import vuetify from "@/plugins/vuetify";
import {loadGlobalVariables} from "@/plugins/global-variables";

// Style
import "@/assets/main.scss"
import "@/assets/common.scss"
import "@/assets/app.scss"

// Style lightbox
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

loadFonts()

const app = createApp(App)

// add plugin
app.use(createPinia())
app.use(router)
app.use(vuetify)

// add global variables
loadGlobalVariables(app)

app.mount('#app')
