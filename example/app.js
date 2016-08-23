(function () {
    angular
        .module('app', ['sarsha.spinner'])
        .controller('appCtrl', function (spinnerService, $http) {
            this.spinner = spinnerService;
            this.data = [];
            initData.bind(this)();
  
            function initData() {
                for (var i = 0; i < 8; i++) {
                    this.data.push({
                        title: 'title ' + i,
                        data: 'data ' + i,
                        date: new Date()
                    })
                }
            }

            this.startHttp = function(name){
                $http.get('http://jsonplaceholder.typicode.com?spinner=' + name, {
                    spinner: name
                })
            }
        })
        .config(function($httpProvider){
            $httpProvider.interceptors.push('spinnerHttpInterceptor');
        })
})();