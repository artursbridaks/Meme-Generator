import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';

Vue.component('vue-draggable-resizable', VueDraggableResizable);

const node = document.getElementById('elementId');

//download the node as png. Image (2019-12-01).png
saveAsPng(node);

//download the node as png. Report (2019-12-01).png
saveAsPng(node, { filename: 'Report', printDate: true });

//download the node as jpeg. Album.jpeg
saveAsJpeg(node, { filename: 'Album', printDate: false });

Vue.use(saveAsPng, saveAsJpeg)

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");