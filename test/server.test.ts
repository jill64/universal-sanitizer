// @vitest-environment node

import { expect, test } from 'vitest'
import { sanitize } from '../dist/server'
import { result, source } from './value'

test(() => {
  expect(sanitize('test')).toBe('test')
  expect(sanitize(source)).toBe(result)
})
