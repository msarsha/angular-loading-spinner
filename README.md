# angular-loading-spinner
Loading spinner for AngularJS

__DEMO:__ https://sarsha17.github.io/angular-spinner/

### Build
Clone the repo and run `npm install` to install dependencies and then `gulp` to build;

### How to use:
(default spinner template)

````html
<div>
  Your content here
  <sarsha-spinner name="spinner1"></sarsha-spinner>
</div>
````

You can place as many spinners as you like
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


Control the spinner using the `spinnerService`

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

You can use your own template:

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
