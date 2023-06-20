import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { defineConfig, type PluginOption } from 'vite'

/** @see https://github.com/vitejs/vite/discussions/7374#discussioncomment-5887382 */
function stripMockServiceWorker(): PluginOption {
  return {
    name: 'strip-mock-service-worker',
    resolveId(source) {
      return source === 'virtual-module' ? source : null
    },
    writeBundle(outputOptions, _inputOptions) {
      const outDir = outputOptions.dir
      const filePath = path.resolve(outDir, 'mockServiceWorker.js')
      fs.unlink(filePath, () => console.log(`Deleted ${filePath}`))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stripMockServiceWorker()],
})
