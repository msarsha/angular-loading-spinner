(function () {
    angular
        .module('app', ['sarsha.spinner'])
        .controller('appCtrl', function (spinnerService) {
            this.spinner = spinnerService;

            this.open = function (name) {
                spinnerService.show(name);
            }

            this.close = function (name) {
                spinnerService.close(name);
            }
        })
})();