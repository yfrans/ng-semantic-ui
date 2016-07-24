var express = require('express');
var app = express();

app.use('/', express.static('./'));
app.use('/lib', express.static('../dist'));
app.listen(3000, function () {
    console.log('ng-semanti-ui test server started @ port 3000');
});