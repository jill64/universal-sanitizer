<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/universal-sanitizer

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/npm/v/@jill64/universal-sanitizer" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/npm/l/@jill64/universal-sanitizer" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/npm/dm/@jill64/universal-sanitizer" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/universal-sanitizer"><img src="https://img.shields.io/bundlephobia/min/@jill64/universal-sanitizer" alt="npm-min-size" /></a> <a href="https://github.com/jill64/universal-sanitizer/actions/workflows/ci.yml"><img src="https://github.com/jill64/universal-sanitizer/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a>

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

## Add DOMPurify hook

The hook is executed before sanitize

```js
import { sanitize } from '@jill64/universal-sanitizer'

const cleaned = sanitize(/* ... */, {
  options: {
    hook: (DOMPurify) => {
      DOMPurify.addHook(
        'uponSanitizeAttribute',
        function (currentNode, hookEvent, config) {
          // Do something with the current node
          // You can also mutate hookEvent for current node (i.e. set hookEvent.forceKeepAttr = true)
          // For other than 'uponSanitizeAttribute' hook types hookEvent equals to null
        }
      )
    }
  }
})
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
