<template>
    <div>
        <canvas v-if="!target" ref="canvas" :width="width" :height="height">
    </div>
</template>
<script>
export default {
    mixins: [
        VueCharts.core.default,
    ],
    props: {
        beginzero:{
            type: Boolean,
            default: false,
        },
        fill:{
            type: Boolean,
            default: false,
        },
        linetension: {
            type: Number,
            default: () => 0.2,
        },
        pointbordercolor: {
            type: String,
            default: () => "rgba(75,192,192,1)",
        },
        pointbackgroundcolor: {
            type: String,
            default: () => "#fff",
        }
    },
    data() {
        return {
            type: 'line',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    type: 'line',
                    label: this.datalabel,
                    fill: this.fill,
                    lineTension:  this.linetension,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: this.pointbordercolor,
                    pointBackgroundColor: this.pointbackgroundcolor,
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
