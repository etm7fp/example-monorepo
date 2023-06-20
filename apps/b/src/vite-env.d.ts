/// <reference types="vite/client" />

/** @see https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript */
interface ImportMetaEnv {
  readonly VITE_B_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
