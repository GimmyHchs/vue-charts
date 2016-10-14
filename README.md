# vue-charts
Base on **Vue2**, **Laravel 5.3** wrapper for **ChartJs**. etc.  
-[Vue js](https://vuejs.org/)  
-[Laravel](https://laravel.com/)  
-[Chart js](http://www.chartjs.org/)   


# NPM Package  
[NPM Package](https://www.npmjs.com/package/hchs-vue-charts)

#Install
	npm install hchs-vue-charts

#Notice
- chart-components need to gulp with [webpack](https://laravel.tw/docs/5.3/elixir#webpack "Webpack")
- vue-charts base on Vue 2
- require hchs-vue-charts after require vue 2
- All we need has been set in **Laravel Framework  >=5.3.16**

#How to use
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
    
    // just require('hchs-vue-charts'); after require('vue');
    require('hchs-vue-charts'); 
    
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
- don't forget your script file

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
