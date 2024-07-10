import DOMPurify from 'dompurify'
import { Sanitize } from './types/Sanitize.js'

export const sanitize: Sanitize = (html, options) => {
  options?.hook?.(DOMPurify)

  return DOMPurify.sanitize(html, {
    ...options?.dompurify,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false
  })
}
