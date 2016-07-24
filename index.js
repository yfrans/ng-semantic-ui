angular.module('ng-semantic-ui', [])
	.directive('uiDropdown', require('./modules/dropdown.js'))
	.directive('uiInput', require('./modules/input.js'));

module.exports = 'ng-semantic-ui';