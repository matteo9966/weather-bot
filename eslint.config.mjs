// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

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
  }
);