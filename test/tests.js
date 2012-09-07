
var url = require('url')
  , parse = url.parse;

function assert(expr) {
  if (!expr) throw new Error('assertion error');
}

describe('url.isAbsolute(str)', function(){
  it('should support scheme://', function(){
    assert(true === url.isAbsolute('http://foo.com'));
  })

  it('should support //', function(){
    assert(true === url.isAbsolute('//foo.com'));
  })

  it('should support relative', function(){
    assert(false === url.isAbsolute('foo'));
    assert(false === url.isAbsolute('foo/bar/baz'));
    assert(false === url.isAbsolute('/foo/bar/baz'));
    assert(false === url.isAbsolute('foo.com/something'));
  })
})

describe('url.isRelative(str)', function(){
  it('should support scheme://', function(){
    assert(false === url.isRelative('http://foo.com'));
  })

  it('should support //', function(){
    assert(false === url.isRelative('//foo.com'));
  })

  it('should support relative', function(){
    assert(true === url.isRelative('foo'));
    assert(true === url.isRelative('foo/bar/baz'));
    assert(true === url.isRelative('/foo/bar/baz'));
    assert(true === url.isRelative('foo.com/something'));
  })
})

describe('url.parse(str)', function(){
  it('should support .href', function(){
    var url = parse('http://google.com/foo/bar');
    assert('http://google.com/foo/bar' == url.href);
  })

  it('should support .pathname', function(){
    var url = parse('http://google.com/foo/bar');
    assert('/foo/bar' == url.pathname);
  })

  it('should support .protocol', function(){
    var url = parse('http://google.com/foo/bar');
    assert('http:' == url.protocol);
  })

  it('should support .hostname', function(){
    var url = parse('http://google.com:3000/foo/bar');
    assert('google.com' == url.hostname);
  })

  it('should support .host', function(){
    var url = parse('http://google.com:3000/foo/bar');
    assert('google.com:3000' == url.host);
  })

  it('should support .search', function(){
    var url = parse('http://google.com:3000/foo/bar?name=tobi');
    assert('?name=tobi' == url.search);
  })

  it('should support .query', function(){
    var url = parse('http://google.com:3000/foo/bar?name=tobi');
    assert('name=tobi' == url.query);
  })

  it('should support .hash', function(){
    var url = parse('http://google.com:3000/foo/bar#something');
    assert('#something' == url.hash);
  })
})
