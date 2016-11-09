# angular-loading-spinner
Loading spinner for AngularJS

__DEMO:__ https://msarsha.github.io/angular-spinner/

### Installing
`npm i sarsha-loading-spinner`

### Build
Clone the repo and run `npm install` to install dependencies and then `gulp` to build;

### Dependencies:
`angular-animate`

### Setup:

add spinner module as dependency
````javascript
angular.module('app', ['sarsha.spinner'])
````
load angular-animate in your html
````html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-animate.min.js"></script>
````


### How to use:

Use the default spinner template

````html
<div>
  Your content here
  <sarsha-spinner name="spinner1"></sarsha-spinner>
</div>
````

Use your own template:

````html
<div>
  Your content here
  <sarsha-spinner name="spinner1">
    <div>
      <span>MY OWN TEMPLATE !!</span>
    </div>
  </sarsha-spinner>
</div>
````

Place as many spinners as you like
````html
<div>
  Your content here
  <sarsha-spinner name="spinner1"></sarsha-spinner>
</div>
<div>
  Your content here
  <sarsha-spinner name="spinner2"></sarsha-spinner>
</div>
````

### Controlling the Spinners

#### Manualy control the spinners using the `spinnerService`

````javascript
  angular.controller('ctrl', function(spinnerService){
    this.doSomething = function(){
      spinnerService.show('spinner1'); 
      // or to show all
      spinnerService.showAll();
    }
    
    this.dontDoSomething = function(){
      spinnerService.close('spinner1');
      // or to close all
      spinnerService.closeAll();
    }
  })
````

#### Let the `spinnerHttpInterceptor` control the spinners

Add the `spinnerHttpInterceptor` to your module config
````javascipt
  angular
    .module('app', [])
    .config(function($httpProvider){
      $httpProvider.interceptors.push('spinnerHttpInterceptor');
    })
````

The default behavior of the `spinnerHttpInterceptor` is to show and close all existing spinners.

You can tell it which spinner is related to the http request by adding the `spinner` object to the `$http` config.

The `spinner` object can be either a `string` for a single spinner or an `Array` for number of spinners.

````javascript
  angular.controller('ctrl', function($http){
    this.doSomething = function(){
      $http.get('http://url.com', {
        spinner: 'spinner1'
      }) 
    }
    
    this.doSomething = function(){
      $http.get('http://url.com', {
        spinner: ['spinner1', 'spinner2']
      }) 
    }
  })
````
