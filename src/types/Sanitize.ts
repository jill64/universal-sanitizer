import type { Config } from 'dompurify'
import type { IOptions } from 'sanitize-html'

export type Sanitize = (
  html: string,
  options?: {
    sanitizeHtml?: IOptions
    dompurify?: Omit<Config, 'RETURN_DOM_FRAGMENT' | 'RETURN_DOM'>
  }
) => string
