// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      /* ============================
       * Ajustes de reglas Angular
       * ============================ */

      // Reglas demasiado estrictas para un POC
      "@angular-eslint/prefer-inject": "off",
      "@angular-eslint/use-lifecycle-interface": "off",
      "@angular-eslint/no-empty-lifecycle-method": "off",

      /* ============================
       * Ajustes TypeScript
       * ============================ */

      // Avisar, pero no bloquear el build
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      // Buenas prácticas
      "prefer-const": "warn",

      /* ============================
       * Reglas de estilo Angular
       * ============================ */

      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {
      // Desactivado para evitar refactor a @if (Angular moderno)
      "@angular-eslint/template/prefer-control-flow": "off",
    },
  },
]);
