# vue-charts
Base on **Vue2**, wrapper for **ChartJs**.    
-[Vue js](https://vuejs.org/)  
-[Chart js](http://www.chartjs.org/)  
-Work well with [Laravel](https://laravel.com/)  
-Degree of completion 60%  

# Render a Chart Easily  
-Single Line
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/easy_use.png)  
-Multiple Line
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/multiple.png)  

# Document and Demo
[Home page](http://vue-charts-demo.hchspersonal.tk/)    
[Line](http://vue-charts-demo.hchspersonal.tk/line)   
[Bar](http://vue-charts-demo.hchspersonal.tk/bar)   
[Radar](http://vue-charts-demo.hchspersonal.tk/radar)   
[Polar Area](http://vue-charts-demo.hchspersonal.tk/polar-area)   
[Pie](http://vue-charts-demo.hchspersonal.tk/pie)   
[Doughnut](http://vue-charts-demo.hchspersonal.tk/doughnut)   

# NPM Package  
[NPM Package](https://www.npmjs.com/package/hchs-vue-charts)

#Install
	npm install hchs-vue-charts

#Notice
- vue-charts base on Vue 2  
- vue-charts base on Chart.js 2  

#How to use --- dist & CDN
1.build a page
```html
    <body>
        <div id="app">
            <chartjs-line></chartjs-line>
        </div>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
    <script src="js/vue-charts.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.min.js"></script>
    <script type="text/javascript">
        const app = new Vue({
            el: '#app',
            components: {
                'chartjs-line': chartjs_line,
            }
        });
    </script>
   ```   
2.Done!   
[CDN demo](http://vue-charts-demo.hchspersonal.tk/demo.html)   
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/cdn_demo.png)

#How to use --- I'm using Laravel
1.Checkout your gulpfile.js in your laravel project  

```javascript
    const elixir = require('laravel-elixir');

    require('laravel-elixir-vue-2');

    /*
     |--------------------------------------------------------------------------
     | Elixir Asset Management
     |--------------------------------------------------------------------------
     |
     | Elixir provides a clean, fluent API for defining some basic Gulp tasks
     | for your Laravel application. By default, we are compiling the Sass
     | file for our application, as well as publishing vendor resources.
     |
     */

    elixir(mix => {
        mix.sass('app.scss')
           .webpack('app.js');  // we just need to require 'hchs-vue-charts' in this file or somewhere else
    });
```
2.open your app.js   

```javascript
    /**
     * First we will load all of this project's JavaScript dependencies which
     * include Vue and Vue Resource. This gives a great starting point for
     * building robust, powerful web applications using Vue and Laravel.
     */

	//By default the bootstrap file will require('vue');
    require('./bootstrap');

    // npm package
    window.VueCharts = require('hchs-vue-charts');
    // register component, here we just register chartjs_line
    Vue.component('chartjs-line', VueCharts.chartjs_line);



    /**
     * Next, we will create a fresh Vue application instance and attach it to
     * the page. Then, you may begin adding components to this application
     * or customize the JavaScript scaffolding to fit your unique needs.
     */

    Vue.component('example', require('./components/Example.vue'));

    const app = new Vue({
        el: '#app'
    });
```
3.run gulp in your laravel project   

		gulp

4.modify your wellcome.blade.php or where you want to show the chart
- give vue root id
- add line chart component
- don't forget your script source


```html
   <body>
        <!--vue root id="app"-->
        <div id="app" class="content">
            <!--line chart component-->
            <chartjs-line></chartjs-line>
            <div class="title m-b-md">
                Laravel
            </div>

            <div class="links">
                <a href="https://laravel.com/docs">Documentation</a>
                <a href="https://laracasts.com">Laracasts</a>
                <a href="https://laravel-news.com">News</a>
                <a href="https://forge.laravel.com">Forge</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
        </div>
   </body>

   <!--set script src-->
   <script src="{{asset('js/app.js')}}"></script>
   ```     



5.Done
![](https://raw.githubusercontent.com/hchstera/vue-charts/master/pictures/welcome_demo.PNG)
