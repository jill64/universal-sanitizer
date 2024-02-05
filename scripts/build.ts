import { build } from 'esbuild'
import { cp } from 'node:fs/promises'

build({
  platform: 'browser',
  format: 'esm',
  entryPoints: ['src/server.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/worker.js'
})

cp('dist/server.d.ts', 'dist/worker.d.ts')
