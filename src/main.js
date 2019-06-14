import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.component('zkx-comp',{
    template: '<div>注册的全局组件</div>'
});

Vue.prototype.$bus = new Vue()
new Vue( {
    render: h => h( App ),
} ).$mount( '#app' )