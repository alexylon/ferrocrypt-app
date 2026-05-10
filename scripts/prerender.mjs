import { build } from 'vite'
import { readFileSync, writeFileSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = 'dist/.prerender'

await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: resolve(root, 'src/prerender.tsx'),
    outDir,
  },
})

const { prerender } = await import(resolve(root, outDir, 'prerender.js'))
const { html } = await prerender()

const indexPath = resolve(root, 'dist/index.html')
const index = readFileSync(indexPath, 'utf-8')
writeFileSync(indexPath, index.replace('<div id="root"></div>', `<div id="root">${html}</div>`))

rmSync(resolve(root, outDir), { recursive: true })
console.log('Prerendered index.html')
