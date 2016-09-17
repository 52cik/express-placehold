# express-placehold

> express placeholder image generator
> **It will not output PNG, JPG pictures, just SVG.**

[![Linux Build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![node][node-image]][node-url]
[![license MIT][license-image]][license-url]


## How to use it

### Installation

``` sh
$ npm install --save-dev 52cik/express-placehold
```

### Examples

``` js
var express = require('express')
var placehold = require('express-placehold')

var app = express()

// Using the default path /placehold
app.use(placehold())

// or custom path /my-path
app.use(placehold('/my-path'))

// or custom path /use-path
app.use('/use-path', placehold())

// Add your middleware here, etc.

app.listen(3000);
```

Then you can access the http://localhost:3000/placehold/200x100/369/fff?text=hello%20world! through the browser.

### Format

```
http://localhost:3000/[size][/bgcolor][/color][?text=test]
```

* **size** - 200 or 200x100 to set the width and height.
* **bgcolor** - The CSS background-color property.
* **color** - The CSS color property.
* **text** - The text information.

### Examples

```
http://localhost:3000/200
http://localhost:3000/200x100
http://localhost:3000/200x100/eee
http://localhost:3000/200x100/369/fff
http://localhost:3000/200x100/369/fff?text=hello%20world!
http://localhost:3000/?text=hello%20world!
etc.
```


[travis-url]: https://travis-ci.org/52cik/express-placehold
[travis-image]: https://img.shields.io/travis/52cik/express-placehold/master.svg?label=linux

[coveralls-url]: https://coveralls.io/github/52cik/express-placehold?branch=master
[coveralls-image]: https://coveralls.io/repos/52cik/express-placehold/badge.svg?branch=master&service=github

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[dependencies-url]: https://david-dm.org/52cik/express-placehold
[dependencies-image]: https://img.shields.io/david/52cik/express-placehold.svg?style=flat

[node-url]: https://nodejs.org
[node-image]: https://img.shields.io/badge/node-%3E%3D%200.10.0-brightgreen.svg
