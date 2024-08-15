import vue from 'eslint-plugin-vue';
import js from "eslint-plugin-vue";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from "@eslint/eslintrc";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [...compat.extends('plugin:vue/strongly-recommended'), {
  plugins: {
    vue,
  },
  languageOptions: {
    globals: {
      axios: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['resources', './resources']],
        extensions: ['.js', '.vue'],
      },
    },
  },
  rules: {

  },
}];
