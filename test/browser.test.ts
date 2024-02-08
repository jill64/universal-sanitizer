// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { sanitize } from '../dist/browser'
import { result, source } from './value'

test(() => {
  expect(sanitize('test')).toBe('test')
  expect(sanitize(source)).toBe(result)
})
