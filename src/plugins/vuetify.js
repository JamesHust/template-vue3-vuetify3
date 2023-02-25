// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Composable
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          grey: '#a5a5a5',
          'pink-red': '#FF597B'
        },
      },
    },
  },
  components,
  directives,
})
