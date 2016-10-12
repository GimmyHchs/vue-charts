<template>
<canvas ref="canvas" :width="width" :height="height">
</template>
<script>
export default {
    mixins: [
        vue_charts.default,
    ],
    props: {
        height: {
            type: Number,
        },
        width: {
            type: Number,
        },
        fill:{
            type: Boolean,
            default: false,
        },
        linetension: {
            type: Number,
            default: () => 0.2,
        },
        bordercolor: {
            type: String,
            default: () => "rgba(75,192,192,1)",
        }
    },
    data() {
        return {
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: "My First dataset",
                    fill: this.fill,
                    lineTension:  this.linetension,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: this.bordercolor,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.data,
                    spanGaps: false,
                }, ],
            },
        };
    },
}
</script>
