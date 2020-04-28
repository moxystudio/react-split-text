# react-split-text

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/react-split-text
[downloads-image]:https://img.shields.io/npm/dm/@moxy/react-split-text.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/react-split-text.svg
[build-status-url]:https://github.com/moxystudio/react-split-text/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/react-split-text/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/react-split-text
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-split-text/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-split-text
[david-dm-image]:https://img.shields.io/david/moxystudio/react-split-text.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-split-text?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-split-text.svg

A react component that wraps each word of a sentence into a `<span>` element.

## Installation

```sh
$ npm install @moxy/react-split-text
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

Sometimes there's a need to split a sentence into multiple elements, either to individually animate or simply style them. The `SplitText` component receives a string and splits it (with a [separator](#separator) of your choice) into multiple `<span>`s.

## Usage

```js
import React from 'react';
import SplitText from '@moxy/react-split-text';

const MyPage = (props) => (
    <div className="container">
        <SplitText className="word">Lorem ipsum dolor sit amet.</SplitText>
    </div>
);

export default MyPage;
```

Import the stylesheet in the project's entry JavaScript file:

```js
import '@moxy/react-split-text/dist/index.css';
```

## API

Besides the following supported props by the `SplitText` component, additional props are spread to each child.

#### children

Type: `string` | Required: `true`

Text to be split and rendered inside the component.

#### className

Type: `string` | Required: `false`

A className to apply to each child.

#### separator

Type: `string` | Required: `false` | Default: `non-breaking space`

The pattern describing where each split should occur, just like the one from [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## Demo

A demo [Next.js](https://nextjs.org/) project is available in the [`/demo`](./demo) folder so you can try out this component.

First, build the `react-split-text` project with:

```sh
$ npm run build
```

To run the demo, do the following inside the demo's folder:

```sh
$ npm i
$ npm run dev
```

*Note: Everytime a change is made to the package a rebuild is required to reflect those changes on the demo.*

## FAQ

### I can't override the component's CSS, what's happening?

There is an ongoing [next.js issue](https://github.com/zeit/next.js/issues/10148) about the loading order of modules and global CSS in development mode. This has been fixed in [v9.3.6-canary.0](https://github.com/zeit/next.js/releases/tag/v9.3.6-canary.0), so you can either update `next.js` to a version higher than `v9.3.5`, or simply increase the CSS specificity when overriding component's classes, as we did in the [`demo`](./demo/pages/index.module.css), e.g. having the page or section CSS wrap the component's one.

## License

Released under the [MIT License](./LICENSE).
