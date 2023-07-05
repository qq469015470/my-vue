import './assets/layout.css'
import './assets/button.css'
import './assets/table.css'
import './assets/font.css'
import 'font-awesome/css/font-awesome.min.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import * as Vuex from 'vuex'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/', component: () => import('@/components/HelloWorld.vue'),
    }],
    render(h) {
        return h(() => import('@/src/App.vue'))
    }
})

const store = new Vuex.Store({
    state: {
        isLogin: false,
        toastr: Object,
    }
})

const app = createApp(App)
            .use(router)
            .use(store)
            .mount('#app')

