const pluginQuery = require('@tanstack/eslint-plugin-query');
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const tanstackConfigs = pluginQuery.configs?.['flat/recommended'] || [];
const configs = Array.isArray(tanstackConfigs) ? tanstackConfigs : [tanstackConfigs];

module.exports = defineConfig([
  ...configs,
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
]);
