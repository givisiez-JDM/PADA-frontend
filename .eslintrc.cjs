module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    "plugin:@stylistic/recommended-extends"

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    'react-refresh/only-export-components': 'warn',

    "no-constant-binary-expression": "error",
    "no-duplicate-imports": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-use-before-define": "error",
    "camelcase":["error",{"ignoreDestructuring": true, "ignoreImports": true}],
    "complexity": ["error", 10],
    "default-case": ["error", { "commentPattern": "^skip\\sdefault" }],
    "eqeqeq": ["error", "smart"],
    "max-lines": ["error", {"max": 20, "skipBlankLines": true, "skipComments": true}],
    "max-depth":["error", 5],
    "multiline-comment-style": ["error", "starred-block"],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-implicit-coercion": "error",
    "no-magic-numbers": ["error", { "ignore": [1], "ignoreArrayIndexes": true, "ignoreDefaultValues": true}],
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-template": "error",
    "require-await": "error",
    "vars-on-top": "error",
    "line-comment-position":"error",

    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/block-spacing": "error",  
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/key-spacing": ["error", {
      "align": {
          "beforeColon": false,
          "afterColon": true,
      }
  }],
  "@stylistic/keyword-spacing": "error",
  "@stylistic/max-len": ["error", { "code": 100 }],
  "@stylistic/semi-style": ["error", "last"],
  "@stylistic/one-var-declaration-per-line": ["error", "always"]
  },
}
