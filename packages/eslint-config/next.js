const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
    "prettier",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["prettier", "import", "@typescript-eslint", "sort-export-all", "only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-boolean-value": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "internal"
          }
        ],
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "warnOnUnassignedImports": true
      }
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "import/newline-after-import": "error",
    "import/extensions": ["error", "never", { "png": "always", "svg": "always" }],
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          "@/apis/**",
          "!@/assets/**",
          "@/atoms/**",
          "@/components/**",
          "@/constants/**",
          "@/hooks/**",
          "@/locales/**",
          "@/types/**",
          "@/utils/**"
        ]
      }
    ],
    "no-unused-vars": "off",
    "sort-imports": ["error", { "ignoreDeclarationSort": true }],
    "object-shorthand": ["error", "always"],
    "no-implicit-coercion": "error",
    "require-await": "error",
    "prefer-object-has-own": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-useless-return": "error",
    "no-console": ["error", { "allow": ["warn", "error", "group", "groupEnd", "groupCollapsed"] }],
    "prefer-exponentiation-operator": "error",
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "export",
        "next": "multiline-block-like"
      }
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "sort-export-all/sort-export-all": "error"
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
