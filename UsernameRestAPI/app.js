"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var module_1 = require();
var app = express();
app.use(bodyParser.json());
app.get('/users', function (req, res) {
    var tom = new module_1.default();
    tom.name = req.params.name;
    tom.age = req.params.age;
    res.json([{ name: 'John Doe', age: 30 }]);
});
app.post('/users', function (req, res) {
    console.log("Body" + req.body);
    var _a = req.body, name = _a.name, age = _a.age;
    res.json({ name: name, age: age });
});
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
