module.exports = /*@ngInject*/function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            placeholder: '@',
            class: '@',
            items: '=',
            model: '=',
            change: '=',
            allowAdditions: '='
        },
        template:
            '<input type="hidden">' + 
            '<i class="dropdown icon"></i>' +
            '<div class="default text">{{placeholder}}</div>' +
            '<div class="menu">' +
            '<div class="item" ng-repeat="item in items" data-value="{{item.value ? item.value : item}}">{{item.text ? item.text : item}}</div>' +
            '</div>',
        link: function (scope, element, attrs) {
            scope.placeholder = scope.placeholder || 'Select...';
            var ddClass = ['ui', 'selection', 'dropdown'];
            if (scope.allowAdditions) {
                ddClass.push('search');
            }
            ddClass.map(function (item) {
                $(element).addClass(item);
            });
            
            $(element).dropdown({
                onChange: function (value, text) {
                    $timeout(function () {
                        if (scope.change) {
                            scope.change(value, text);
                        }
                        scope.model = value;
                    });
                },
                allowAdditions: scope.allowAdditions
            });
            if (scope.model) {
                $timeout(function () {
                    $(element).dropdown('set selected', scope.model);
                });
            }
            scope.$watch(function () { return scope.model; }, function () {
                $(element).dropdown('set selected', scope.model);
            });
        }
    };
};