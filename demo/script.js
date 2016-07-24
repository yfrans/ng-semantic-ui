angular.module('demoApp', ['ng-semantic-ui'])
    .controller('DropdownController', function ($scope) {
        $scope.items = [];
        for (var i = 1; i < 11; i++) {
            $scope.items.push('Item #' + i);
        }
    })
    .controller('InputController', function () { });