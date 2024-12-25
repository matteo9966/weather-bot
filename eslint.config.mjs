// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";


export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules:{
        semi:"error",
        "arrow-body-style": ["error", "always"],
        "no-console":"warn",
        "camelcase":"warn"
    },
    ignores: ["**/dist/**"]
  },
  {rules:eslintConfigPrettier.rules}
);