# testium-multibyte-bug

Issue: [doesn&#39;t deal with multibyte unicode characters · Issue #124 · groupon-testium/testium](https://github.com/groupon-testium/testium/issues/124 "doesn&#39;t deal with multibyte unicode characters · Issue #124 · groupon-testium/testium")

[testium](https://github.com/groupon-testium/testium "testium") does not deal with multibyte unicode characters.

![img](http://monosnap.com/image/SXcLWmGMbUCBqIUZnSkVKr4kZe6ptY.png)

Multi-byte characters: Japanese, Chinese, Emoji :art: etc...

This is caused by [groupon-testium/webdriver-http-sync](https://github.com/groupon-testium/webdriver-http-sync "groupon-testium/webdriver-http-sync") or [ForbesLindesay/request-sync](https://github.com/ForbesLindesay/request-sync "ForbesLindesay/request-sync")?

## Problem code

```js
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
```

## Usage

```
npm install
npm test
```

## License

MIT
