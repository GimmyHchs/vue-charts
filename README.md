# vue-charts
Base on **Vue2**, **Laravel 5.3** wrapper for **ChartJs**. etc.  

[NPM Package](https://www.npmjs.com/package/hchs-vue-charts)

#Install
	npm install hchs-vue-charts

#Notice
- chart-components need to gulp with [webpack](https://laravel.tw/docs/5.3/elixir#webpack "Webpack")
- vue-charts base on Vue 2
- All we need has been set in **Laravel 5.3 Framework**

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
           .webpack('app.js');
    });
    ```
2.


