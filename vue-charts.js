if(Vue === undefined)
    throw "Vue is undefined";
    
window.Chart = require('chart.js');
window.vue_charts = require('./vue-chartjs-lib.js');
Vue.component('chartjs-line', require('./components/chartjs-line.vue'));
