const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.qubika.com/',
      setupNodeEvents(on, config){
        require('cypress-mochawesome-reporter/plugin')(on);
      }

  },
});
