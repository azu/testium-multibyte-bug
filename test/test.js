// LICENSE : MIT
"use strict";
var assert = require("assert");
var injectBrowser = require('testium/mocha');
describe("multi byte char", function () {
    before(injectBrowser());
    beforeEach(function () {
        this.browser.navigateTo('https://www.google.com');
    });
    it('should type to textarea', function () {
        var multiByteText = "日本語 text";
        var input = this.browser.getElement('input[name="q"]');
        input.type(multiByteText);
        assert.equal(input.get("value"), multiByteText);
    });
});