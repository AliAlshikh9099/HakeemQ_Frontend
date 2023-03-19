import { createApp } from 'vue'
import App from './App.vue'
import MainTitle from './components/UI/MainTitle.vue';
import MainCard from './components/UI/MainCard.vue';
import MainModal from './components/UI/MainModal.vue';
import OurLogo from './components/logo/OurLogo.vue';
import MainHeader from './components/layout/MainHeader';
import axios from 'axios';
import VueAuxios from 'vue-axios';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCheck, faCircleRight } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);

library.add(faCheck, faCircleRight, faBars)
    
app.component('main-title', MainTitle);
app.component('main-card', MainCard);
app.component('main-modal', MainModal);
app.component('our-logo', OurLogo);
app.component('main-header', MainHeader);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(VueAuxios, axios);

app.use(router);

app.mount('#app');

