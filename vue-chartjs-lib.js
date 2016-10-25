export default{
    props: {
        beginzero:{
            type: Boolean,
            default: () => true,
        },
        datalabel: {
            type: String,
            default: () => 'My dataset',
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
        bordercolor: {
            default: () => "rgba(75,192,192,1)",
        },
        backgroundcolor: {
            default: () => "rgba(75,192,192,0.4)",
        },
        scalesdisplay: {
            type: Boolean,
            default: () => true,
        },
        target: {
            type: String,
            default: () => null,
        }
    },
    data () {
        return {
            type : null,
            datasets : null,
            canvas : null,
            context : null,
            chart: null,
            chart_data : {
                labels: this.labels,
                datasets: this.datasets,
            },
            options :{
                responsive:false,
                maintainAspectRatio:false,
                scales: {
                    yAxes: [{
                        display: this.scalesdisplay,
                        ticks: {
                            beginAtZero:this.beginzero,
                        }
                    }]
                },
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
        initTargetCanvas(){
            if(this.target==null){
                this.canvas = this.$refs.canvas;
                this.context = this.$refs.canvas.getContext('2d');
                this.renderChart();
            }
            else {
                this.canvas = document.getElementById(this.target);
                this.context = document.getElementById(this.target).getContext('2d');
                if(typeof datasets == 'undefined')
                    window.datasets = [];
                if(typeof datasets[this.target] == 'undefined')
                {
                    window.datasets[this.target] =[];
                    console.log("datasets[this.target] un def");
                }
                this.appendChart();
            }
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
                options: this.options,
            });
        },
        appendChart() {
            window.datasets[this.target].push(this.chart_data.datasets[0]);
            this.chart_data.datasets = window.datasets[this.target];

            this.renderChart();
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
        this.checkSize();
        this.initTargetCanvas();
        // this.renderChart();
    },
    beforeDestroy(){
        this.cleanChart();
        // console.log('Line Chart Before Destroy');
    }
}
