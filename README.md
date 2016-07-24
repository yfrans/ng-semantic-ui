#ng-semantic-ui
Directive(s) for Semantic-UI library.  
Easy to use:

`<script type="text/javascript" src="./mylibs/ng-semantic-ui/dist/ng-semantic-ui.min.js"></script>`  
then: `angular.module('myApp', ['ng-semantic-ui'])`
######OR
`npm install ng-semantic-ui`  
then: `angular.module('myApp', [require('ng-semantic-ui')])`  
##Available directives
####Dropdown
`<div ui-dropdown></div>`
#####Attributes:
- `model` the model of this element (ng-model)
- `items` array of items, simple string or object with display text and value: `{ text: 'My text', value: '1' }`
- `class` the element class. (`ui dropdown selection` is already there)
- `placeholder` the element placeholder, default: "Select..."
- `allow-additions` "true" or "false". Automatically add `search` class.
- `change` the function to call when onChange is fired. Accept value and text: `function (value, text) {}`.

####Input
`<div ui-input></div>`
#####Attributes:
- `model` the model of this element (ng-model)
- `class` the element class. (`ui input` is already there)
- `placeholder` the element placeholder, default: "Select..."
- `label` the label to add to the input
- `label-position` the label position (left or right, default left)
- `icon` the icon to add to the input
- `icon-position` the icon position (left or right, default right)

More to come...