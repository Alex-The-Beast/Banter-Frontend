import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // JS/ES rules
      quotes: ["error", "single"], // or 'single' based on your preference
      "comma-dangle": ["error", "always-multiline"],
      "react/react-in-jsx-scope": "off", // Vite/React 17+ doesn't require React in scope
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      "plugin:react/recommended",
      "plugin:react/jsx-runtime", // For automatic JSX runtime
    ],
  },
]);
