module.exports = /*@ngInject*/function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            placeholder: '@',
            class: '@',
            icon: '@',
            iconPosition: '@',
            label: '@',
            labelPosition: '@',
            model: '='
        },
        template:
            '<div class="ui label" ng-show="label">{{label}}</div>' +
            '<input type="{{type}}" placeholder="{{placeholder}}" ng-model="model">' +
            '<i ng-show="icon"></i>',
        link: function (scope, element, attrs) {
            scope.placeholder = scope.placeholder;
            
            var inputClass = ['ui', 'input'];
            var iconClass = (scope.icon || '').split(' ');

            if (iconClass.length > 0) {
                iconClass.push('icon');
                inputClass.splice(0, 0, scope.iconPosition, 'icon');

                var iconElement = $(element).find('i');
                iconClass.map(function (item) {
                    iconElement.addClass(item);
                });
            }

            if (scope.label) {
                inputClass.splice(0, 0, scope.labelPosition, 'labeled');
                if (scope.labelPosition === 'right') {
                    var e = $(element).find('.label');
                    e.insertAfter($(element).find('input'));
                }
            }

            inputClass.map(function (item) {
                $(element).addClass(item);
            });
        }
    };
};