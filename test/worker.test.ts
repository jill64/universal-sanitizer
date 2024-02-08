// @vitest-environment edge-runtime

import { expect, test } from 'vitest'
import { sanitize } from '../dist/worker'
import { result, source } from './value'

test(() => {
  expect(sanitize('test')).toBe('test')
  expect(sanitize(source)).toBe(result)
})
