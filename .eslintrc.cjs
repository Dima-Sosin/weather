module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.js",
    "package.json",
    "package-lock.json"
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "simple-import-sort"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^.+\\.?(css)$"],
              ["^react", "^\\w"],
              ["^@\\w"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
            ]
          }
        ]
      }
    }
  ]
}
