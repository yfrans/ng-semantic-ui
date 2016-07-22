#ng-semantic-ui
--
Directive(s) for Semantic-UI library.  
Easy to use:

`<script type="text/javascript" src="./mylibs/ng-semantic-ui.js"></script>`  
######OR
`angular.module('myApp', [require('ng-semantic-ui')])`  
##Available directives
####Dropdown
`<ui-dropdown></ui-dropdown>`
#####Attributes:
- `model` the model of this element (ng-model)
- `items` array of items, simple string or object with display text and value: `{ text: 'My text', value: '1' }`
- `class` the element class. (`ui dropdown selection` is already there)
- `placeholder` the element placeholder, default: "Select..."
- `allow-additions` "true" or "false". Automatically add `search` class.
- `change` the function to call when onChange is fired. Accept value and text: `function (value, text) {}`.