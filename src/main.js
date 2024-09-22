import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: {
            title: {
                portfolio: 'Portfolio',
                project: 'Project',
                login: 'Log in',
            }
        },
        fr: {
            title: {
                portfolio: 'Portfolio',
                project: 'Projet',
                login: 'Se connecter',
            }
        }
    }
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
