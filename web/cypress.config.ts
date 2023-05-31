import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    googleClientId: 'CLIENT_ID',
    googleClientSecret: 'CLIENT_SECRET',
    googleRefreshToken: 'REFRESH_TOKEN',
  },
  projectId: '34w3c4',
  defaultCommandTimeout: 100000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts').default(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
