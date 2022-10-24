import Home from '../components/home.vue'
import About from '../components/karyawan.vue'
import Magang from '../components/magang.vue'
import Cuti from '../components/cuti.vue'
import Resign from '../components/resign.vue'
import Gaji from '../components/gaji.vue'

import Add from '../components/add.vue'
import Sign from '../components/sign.vue'
export default {
    mode: 'history',

    routes: [
        {
            path: '/login',
            name: 'sign',
            component: Sign,
        },
        
        {
            path: '/home',
            name: 'home',
            component: Home,
            
        },
        {
            path: '/karyawan',
            name: 'karyawan',
            component: About,
        },
        {
            path: '/magang',
            name: 'magang',
            component: Magang,
        },
        {
            path: '/cuti',
            name: 'cuti',
            component: Cuti,
        },
        {
            path: '/resign',
            name: 'resign',
            component: Resign,
        },
        {
            path: '/gaji',
            name: 'gaji',
            component: Gaji,
        },
        {
            path: '/add',
            name: 'add',
            component: Add,
        },
    ]
}