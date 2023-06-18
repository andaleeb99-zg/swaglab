const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 120000
    },
    chromeWebSecurity:false,
    specPattern:"cypress\\e2e\\*.js"
    ,"pageLoadTimeout": 120000,
  },
});
