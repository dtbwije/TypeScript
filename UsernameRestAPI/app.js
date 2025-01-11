"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.get('/users', function (req, res) {
    console.log(req.baseUrl);
    res.json([{ name: 'John Doe', age: 30 }]);
});
app.post('/users', function (req, res) {
    var _a = req.body, name = _a.name, age = _a.age;
    res.json({ name: name, age: age });
});
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
