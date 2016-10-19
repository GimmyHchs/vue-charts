<template>
<canvas ref="canvas" :width="width" :height="height">
</template>
<script>
export default {
    mixins: [
        vue_charts.default,
    ],
    props: {
        pointbordercolor: {
            type: String,
            default: () => "#fff",
        },
        pointbackgroundcolor: {
            type: String,
            default: () => "rgba(179,181,198,1)",
        }
    },
    data() {
        return {
            type: 'radar',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    pointBackgroundColor: this.pointbackgroundcolor,
                    pointBorderColor: this.pointbordercolor,
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: this.data
                }],
            },
            options: {
                scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: this.beginzero
                    }
                }
            },
        };
    },
}
</script>
