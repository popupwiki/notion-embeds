import { relative } from 'path';

const buildEslintCommand = (filenames) =>
  `bun check-light --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' --file ')}`;

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '!(*.js|*.jsx|*.ts|*.tsx)': ['prettier --ignore-unknown --write'],
};
