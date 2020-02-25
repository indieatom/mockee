<p align="center">
  <img width="427" height="300" src="https://raw.githubusercontent.com/indieatom/mockee/master/assets/mockee-logo.png">
</p>

> A simple JSON based mock server

[![GitHub issues][github-issues]](issues)
![node][node-version]
[![NPM Version][npm-image]][npm-url]
![npm bundle size][package-size]
[![Downloads Stats][npm-downloads]][npm-url]

```js
const mockee = require('@indieatom/mockee')
mockee()
```

The lightest way to mock your API calls just defining a JSON in your project.

## Installation

```sh
npm install @indieatom/mockee --save

# OR

yarn add @indieatom/mockee
```

## Usage

This package is based on a JSON that contains all your mockable request. Must be like:

```json
{
    "GET": {
        "/your/mocked/route/": {
            "body": [{ "name": "Jordan" }]
        },
        "/route/with/expected/code/": {
            "code": 503
        }
    },
    "POST": {},
    "PUT": {},
    "DELETE": {}
}
```

That file could be saved in any directory inside your project and must be parsed to `mockee()`.

```js
const mockee = require('@indieatom/mockee')

// That accept your mock config by params
const mockeeConfig = {
    mock: './mock/my_mock.json', // JSON mock file path location
    port: 1234, // Mock server port (Default 4004)
    loader: 'https://github.com' // Optinal server to load data (Set '' to use dafult not found rule)
}

mockee(mockeeConfig)
```

## Meta

Indie Atom – indieatom@gmail.com

Distributed under the MIT license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/indieatom/mockee/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[github-issues]: https://img.shields.io/github/issues/indieatom/mockee?style=for-the-badge
[issues]: https://github.com/indieatom/mockee/issues
[npm-image]: https://img.shields.io/npm/v/@indieatom/mockee.svg?style=for-the-badge
[npm-url]: https://npmjs.org/package/@indieatom/mockee
[npm-downloads]: https://img.shields.io/npm/dm/@indieatom/mockee.svg?style=for-the-badge
[node-version]: https://img.shields.io/node/v/@indieatom/mockee?style=for-the-badge
[package-size]: https://img.shields.io/bundlephobia/min/@indieatom/mockee?style=for-the-badge
