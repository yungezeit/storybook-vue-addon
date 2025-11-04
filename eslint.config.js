// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import typescriptPreset from '@yungezeit/eslint-typescript';

export default [
  ...typescriptPreset,
  { ignoreFiles: ['scripts'] },
  ...storybook.configs["flat/recommended"]
];
