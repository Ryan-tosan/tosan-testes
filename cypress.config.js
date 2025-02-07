const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://seusite.com", // Altere para a URL do seu projeto
    setupNodeEvents(on, config) {
      // Adicione eventos personalizados aqui
    },
  },
});
