(function () {
    angular
        .module('sarsha.spinner', [])
        .directive('sarshaSpinner', sarshaSpinner)
        .service('spinnerService', spinnerService);

    function sarshaSpinner(spinnerService) {
        return {
            restrict: 'E',
            scope: {
                name: '@',
                active: '@'
            },
            transclude: true,
            bindToController: true,
            controllerAs: '$ctrl',
            controller: angular.noop,
            template: `
                <div class="sarsha-spinner-container" ng-show="$ctrl.active">
                    <div class="sarsha-spinner">
                        <div ng-transclude>
                           <div class="spinner">
                                <div class="rect1"></div>
                                <div class="rect2"></div>
                                <div class="rect3"></div>
                                <div class="rect4"></div>
                                <div class="rect5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            link: function (scope, elm, attrs, ctrl) {
                var parent = elm.parent();
                var parentPosition = parent.position;

                var spinnerScope = {
                    show: show,
                    close: close
                }

                if (!parentPosition || parentPosition === 'static' || parentPosition === '')
                    parent.css('position', 'relative');

                function show() {
                    ctrl.active = true;
                }

                function close() {
                    ctrl.active = false;
                }

                spinnerService.register(ctrl.name, spinnerScope);
            }
        }
    }

    function spinnerService() {
        var service = this;
        var spinners = {};

        service.show = show;
        service.close = close;
        service.register = register;

        return service;

        function show(name) {
            spinners[name].show()
        }

        function close(name) {
            spinners[name].close();
        }

        function register(name, spinnerScope) {
            spinners[name] = spinnerScope;
        }
    }
})();