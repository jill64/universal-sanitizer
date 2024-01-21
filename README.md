<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/universal-sanitizer

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/npm/v/@jill64/universal-sanitizer" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/npm/l/@jill64/universal-sanitizer" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/npm/dm/@jill64/universal-sanitizer" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/bundlephobia/min/@jill64/universal-sanitizer" alt="npm-min-size" /></a>

<!----- END GHOST DOCS BADGES ----->

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

| condition | resolve                                                                  |
| --------- | ------------------------------------------------------------------------ |
| `browser` | [`DOMPurify`](https://github.com/cure53/DOMPurify#readme)                |
| `default` | [`sanitize-html`](https://github.com/apostrophecms/sanitize-html#readme) |
| `worker`  | [`sanitize-html`](https://github.com/apostrophecms/sanitize-html#readme) |

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
