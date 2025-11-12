"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testlib_js_1 = require("./testlib.js");
describe('testlib', function () {
    it('should work', function () {
        expect((0, testlib_js_1.testlib)()).toEqual('testlib');
    });
});
