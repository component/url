
# url

  url parser.

## Installation

    $ component install component/url

## Example

```js
var url = require('url');
url.parse('http://example.com:3000/store/shoes?sort=desc');
```

yields:

```js
{
  hash: ""
  host: "example.com:3000"
  hostname: "example.com"
  href: "http://example.com:3000/store/shoes?sort=desc"
  pathname: "/store/shoes"
  protocol: "http:"
  query: "sort=desc"
  search: "?sort=desc"
}
```

## Note

  This url "parser" uses an __A__ tag, this means that when
  a relative url is given, such as "/foo", it becomes relative
  to the current domain / path, because the browser resolves it
  as it normally would.

## License

  MIT
