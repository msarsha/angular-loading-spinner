(function () {
    angular
        .module('app', ['sarsha.spinner'])
        .controller('appCtrl', function (spinnerService) {
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
        })
})();