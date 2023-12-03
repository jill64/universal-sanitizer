import sanitizeHtml from 'sanitize-html'
import type { Sanitize } from './types/Sanitize.js'

export const sanitize: Sanitize = (html, options) =>
  sanitizeHtml(html, options?.sanitizeHtml)
