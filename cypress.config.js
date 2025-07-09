const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.com', // opsional, agar bisa pakai cy.visit('/') tanpa hardcode
  },
  viewportWidth: 1280,   // Lebar layar (misalnya ukuran laptop)
  viewportHeight: 720,   // Tinggi layar
});
