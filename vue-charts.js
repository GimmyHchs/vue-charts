if(typeof Chart === "undefined")
    throw "ChartJS is undefined";
// window.Chart = require('chart.js');
window.vue_charts = require('./vue-chartjs-lib.js');
window.chartjs_line = require('./components/chartjs-line.vue');
window.chartjs_bar = require('./components/chartjs-bar.vue');
