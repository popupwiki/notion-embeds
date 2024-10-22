import react from '@woohm402/eslint-config-react';

export default [
  {
    ignores: ['eslint.config.mjs', 'postcss.config.mjs'],
    extends: ['next/core-web-vitals', 'next/typescript'],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
];
