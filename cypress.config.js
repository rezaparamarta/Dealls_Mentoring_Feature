const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/en', // opsional, agar bisa pakai cy.visit('/') tanpa hardcode
  },
  env: {
    EMAIL: 'rparamarta7@gmail.com',
    PASSWORD: 'k3pl3r22b',
  }
});
