export default{
    props: {
        type: {
            type: String,
            default: () => 'line',
        },
        labels: {
            type: Array,
            default: () => ['first', 'second', 'third', 'fourth'],
        },
        data: {
            type: Array,
            default: () => [40, 60, 45, 70],
        },
        width: {
            type: Number,
            default: () => null,
        },
        height: {
            type: Number,
            default: () => null,
        },
    },
    data () {
        return {
            datasets : null,
            canvas : null,
            context : null,
            chart: null,
            options :{
                responsive:false,
                maintainAspectRatio:false,
            },
            chart_data : {
                labels: this.labels,
                datasets: this.datasets,
            },
        };
    },
    watch:{
        data(val){
            // console.log(val);
            this.renderChart();
        },
        labels(val){
            // console.log(val);
            this.renderChart();
        }
    },
    methods:{
        setDatasets(val){
            this.datasets = val;
        },
        cleanChart(){
            if(this.chart!=null)
                this.chart.destroy();
        },
        renderChart() {
            this.cleanChart();
            this.chart = new Chart(this.context, {
                type: this.type,
                data: this.chart_data,
                options: {
                    responsive : this.options.responsive,
                    maintainAspectRatio : this.options.maintainAspectRatio,
                }
            });
            // console.log(this.chart);
        },
        checkSize(){
            if(this.width==null||this.height==null)
            {
                this.options.responsive = true;
                this.options.maintainAspectRatio = true;
            }
        },
    },
    mounted(){
        this.canvas = this.$refs.canvas;
        this.context = this.$refs.canvas.getContext('2d');
        this.checkSize();
        this.renderChart();
    },
    beforeDestroy(){
        this.cleanChart();
        // console.log('Line Chart Before Destroy');
    }
}
