import eslint from '@eslint/js';
import json from '@eslint/json';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import { globalIgnores } from 'eslint/config';
import { dirname } from 'path';
import { config, configs } from 'typescript-eslint';
import { fileURLToPath } from 'url';

export default config(
  globalIgnores(['.yarn/', 'dist/', 'node_modules/']),
  eslint.configs.recommended,
  prettier,
  configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  perfectionist.configs['recommended-alphabetical'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
  },
  json.configs.recommended,
  {
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'no-console': 'error',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          newlinesBetween: 0,
          partitionByNewLine: false,
        },
      ],
      'sort-keys': 'error',
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }),
      ],
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },
);
