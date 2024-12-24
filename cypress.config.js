const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.bootcampshub.ai',
    setupNodeEvents(on, config) {
      // Add any necessary event listeners here
    },
  },
});