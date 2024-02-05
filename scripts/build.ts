import { build } from 'esbuild'

build({
  platform: 'browser',
  format: 'esm',
  entryPoints: ['src/server.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/worker.js'
})
