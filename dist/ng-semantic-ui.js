(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('ng-semantic-ui', [])
	.directive('uiDropdown', require('./modules/dropdown.js'))
	.directive('uiInput', require('./modules/input.js'));

module.exports = 'ng-semantic-ui';
},{"./modules/dropdown.js":2,"./modules/input.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
            scope.placeholder = scope.placeholder || 'Select...';
            
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
},{}]},{},[1]);
