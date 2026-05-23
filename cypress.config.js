const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    defaultCommandTimeout:7000,

    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-notifications');
          launchOptions.args.push('--disable-popup-blocking');
        }
        return launchOptions;
      });
    }
   
  },

  
});
