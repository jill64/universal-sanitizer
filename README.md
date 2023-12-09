<!----- BEGIN GHOST DOCS HEADER ----->

# universal-sanitizer

[![npm-version](https://img.shields.io/npm/v/@jill64/universal-sanitizer)](https://npmjs.com/package/@jill64/universal-sanitizer) [![npm-license](https://img.shields.io/npm/l/@jill64/universal-sanitizer)](https://npmjs.com/package/@jill64/universal-sanitizer) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/universal-sanitizer)](https://npmjs.com/package/@jill64/universal-sanitizer) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/universal-sanitizer)](https://npmjs.com/package/@jill64/universal-sanitizer)

💎 Isomorphic html sanitizer by DOMPurify + sanitize-html

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/universal-sanitizer
```

## Usage

Conditional Export applies the appropriate file at each runtime.

```js
import { sanitize } from '@jill64/universal-sanitizer'

const cleaned = sanitize(/* ... */, {
  // options: {
  //   sanitizeHtml: sanitize-html options
  //   dompurify: DOMPurify options
  // }
})
```

| condition | resolve         |
| --------- | --------------- |
| `browser` | [`DOMPurify`](https://github.com/cure53/DOMPurify#readme)     |
| `default` | [`sanitize-html`](https://github.com/apostrophecms/sanitize-html#readme) |
| `worker`  | [`sanitize-html`](https://github.com/apostrophecms/sanitize-html#readme) |
