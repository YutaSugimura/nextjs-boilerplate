module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn'],
    'no-shadow': ['error'],
  },
};
