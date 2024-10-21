import react from '@woohm402/eslint-config-react';

export default [
  {
    ignores: [
      'dist',
      'eslint.config.js',
      'postcss.config.mjs',
      '.lintstagedrc.mjs',
    ],
    extends: ['next/core-web-vitals', 'next/typescript'],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
];
