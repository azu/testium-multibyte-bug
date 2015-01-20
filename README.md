# testium-multibyte-bug

[testium](https://github.com/groupon-testium/testium "testium") does not deal with multibyte unicode characters.

![img](http://monosnap.com/image/SXcLWmGMbUCBqIUZnSkVKr4kZe6ptY.png)

Multi-byte characters: Japanese, Chinese, Emoji :art: etc...

This is caused by [groupon-testium/webdriver-http-sync](https://github.com/groupon-testium/webdriver-http-sync "groupon-testium/webdriver-http-sync") or [ForbesLindesay/request-sync](https://github.com/ForbesLindesay/request-sync "ForbesLindesay/request-sync")?

## Usage

```
npm install
npm test
```

## License

MIT