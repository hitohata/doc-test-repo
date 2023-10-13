import { defineConfig, mergeConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ["index.ts"],
      exclude: ['packages/template/*'],
    },
})
