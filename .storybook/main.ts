import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", import.meta.resolve("./local-preset.ts"), "@storybook/addon-docs"],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      plugins: [vue()],
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  }
};
export default config;
