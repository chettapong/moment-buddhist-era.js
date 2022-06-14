# Moment Buddhist Era
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Buddhist Era plugin for [Moment.js](https://momentjs.com/)

## Features

- Buddhist Era (B.E.) support

## Setup

### Browser
Grab the file as well as moment.js. Then simply reference Moment Buddhist Era after Moment:
```html
<script src="moment.min.js"></script>
<script src="moment-buddhist-era.js"></script>
```

> If you want to pull from a CDN, [this one](https://www.jsdelivr.com/package/npm/@chettapong/moment-buddhist-era.js) is automatically kept up to date.

### Node.js

Add `@chettapong/moment-buddhist-era.js` dependency to your project

```bash
yarn add --dev @chettapong/moment-buddhist-era.js # or npm install --save-dev @chettapong/moment-buddhist-era.js
```

```js
// CommonJS
var moment = require('moment');
require('@chettapong/moment-buddhist-era.js');
```

```js
// ESM
import moment from 'moment';
import '@chettapong/moment-buddhist-era.js';
```

## Usage

Format
```js
moment('2019-06-27T02:15:07+07:00').format('MM/DD/YYYY') // 06/27/2562
```

Disabled Buddhist Era
```js
moment.buddhistEra(false)
moment('2019-06-27T02:15:07+07:00').format('MM/DD/YYYY') // 06/27/2019
```

Disabled Buddhist Era in format method
```js
moment('2019-06-27T02:15:07+07:00').format('MM/DD/YYYY', { be: false }) // 06/27/2019
```

## Using with TypeScript

Add `@via-thailand/via-moment-buddhist-era` to the `compilerOptions.types` section of your project's `tsconfig.json` file:

```json
{
  compilerOptions: {
    "types": [
      "@via-thailand/via-moment-buddhist-era",
    ]
  },
}
```

## License

[MIT License](./LICENSE)

Copyright (c) 2021 Chettapong Pinsuwan

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@chettapong/moment-buddhist-era.js/latest.svg
[npm-version-href]: https://npmjs.com/package/@chettapong/moment-buddhist-era.js

[npm-downloads-src]: https://img.shields.io/npm/dt/@chettapong/moment-buddhist-era.js.svg
[npm-downloads-href]: https://npmjs.com/package/@chettapong/moment-buddhist-era.js

[github-actions-ci-src]: https://github.com/chettapong/moment-buddhist-era.js/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/chettapong/moment-buddhist-era.js/actions/workflows/ci.yml

[codecov-src]: https://img.shields.io/codecov/c/github/chettapong/moment-buddhist-era.js.svg
[codecov-href]: https://codecov.io/gh/chettapong/moment-buddhist-era.js

[license-src]: https://img.shields.io/npm/l/@chettapong/moment-buddhist-era.js.svg
[license-href]: https://npmjs.com/package/@chettapong/moment-buddhist-era.js
