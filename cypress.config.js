
import { allureCypress } from "allure-cypress/reporter";

// const { defineConfig } = require("cypress");


export default({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});
