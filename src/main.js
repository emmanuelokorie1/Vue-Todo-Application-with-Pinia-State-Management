import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import VueFeather from 'vue-feather';

const app = createApp(App)

app.use(createPinia())
app.component(VueFeather.name, VueFeather);
app.mount('#app')