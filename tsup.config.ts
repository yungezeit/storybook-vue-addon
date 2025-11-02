import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

const NODE_TARGET = "node20.19";

export default defineConfig(async (options) => {
   const packageJson = (
     await import("./package.json", { with: { type: "json" } })
   ).default;
  const {
    bundler: {
      managerEntries = [],
      previewEntries = [],
      nodeEntries = [],
    },
  } = packageJson;

  const commonConfig: Options = {
    splitting: true,
    format: ['esm'],
    treeshake: true,
    clean: options.watch ? false : true,
    external: ["react", "react-dom", "@storybook/icons"],
  };

  const configs: Options[] = [];

  if (managerEntries.length) {
    configs.push({
      ...commonConfig,
      entry: managerEntries,
      target: "esnext",
      platform: 'browser',
    });
  }

  if (previewEntries.length) {
    configs.push({
      ...commonConfig,
      entry: previewEntries,
      target: "esnext",
      platform: 'browser',
      dts: true,
    });
  }

  if (nodeEntries.length) {
    configs.push({
      ...commonConfig,
      entry: nodeEntries,
      target: NODE_TARGET,
      platform: 'node',
    });
  }

  return configs;
});
