/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '^next', '^[a-z].*', '^@/.*', '^[./]'],
};
