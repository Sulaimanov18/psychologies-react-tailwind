import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed

      //   log(message) {
      //     console.log(message);
      //     return null;
      //   }
      // });
    },
    baseUrl: 'http://localhost:3000', // Set the base URL for e2e testing
    viewportWidth: 1280,                
    viewportHeight: 720,                // Set the default viewport height
  },

  component: {
    devServer: {
      framework: "react",  
      bundler: "vite",     
    },
    // Additional component testing configuration options
  },
});
