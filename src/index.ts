import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'

// Экземпляр приложения
const app = createApp(App)

// Добавление плагинов
app.use(store)
app.use(router)

// Метод, который вызывает маунт приложения
app.mount('#app')
