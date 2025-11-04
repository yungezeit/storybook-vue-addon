<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/yungezeit/storybook-vue-addon/refs/heads/main/images/dark/header.png">
    <img src="https://raw.githubusercontent.com/yungezeit/storybook-vue-addon/refs/heads/main/images/light/header.png" alt="@yungezeit/storybook-vue-addon" />
  </picture>
</p>

(Not so) personal Storybook addon for Vue 3.4+ codebases.

## Install

```sh
# Using npm
npm i -D @yungezeit/storybook-vue-addon
# Using Yarn
yarn add -D @yungezeit/storybook-vue-addon
# Using pnpm
pnpm add -D @yungezeit/storybook-vue-addon
# Using bun
bun add -D @yungezeit/storybook-vue-addon
```

## Usage

Register it as an addon in `.storybook/main.(js|ts)`.

```js
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  // …
  addons: [
    // … your other addons
    '@yungezeit/storybook-vue-addon', // 👈 register the addon here
  ],
};

export default config;
```

## Features

### Vue models panel

Vue components you're testing/playing with in Storybook may expose one or multiple models (_a.k.a._
two-way bindings) using either Vue's `defineModel` macro or its prop and update event equivalent
(e.g. `modelValue` and `update:modelValue`). Sometimes you want to make sure user interactions end
up mutating model values as expected, but the rendered component doesn't translate and ensure the
actual correctness of such values. For example a checkbox group could visually work as expected when
interacted with, but the underlying model value may not be what you expect it to be (e.g. an array
of strings instead of an array of option objects).

Registering this addon adds a "Vue model" panel within Storybook's addon view which - for the active
Story's underlying Vue component - lists all detected models and output their current value in
real-time so that you can see how user interaction impacts the models' raw values.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/yungezeit/storybook-vue-addon/refs/heads/main/images/dark/demo.gif">
    <img src="https://raw.githubusercontent.com/yungezeit/storybook-vue-addon/refs/heads/main/images/light/demo.gif" alt="Usage demo of @yungezeit/storybook-vue-addon"  />
  </picture>
</p>

### Quicklink to external documentation

This addon also adds a "documentation" shortcut in the toolbar which is shown whenever your
component-level meta parameters include a `docsUrl` property. Pretty useful when your actual
component documentation is not powered by Storybook (e.g. Vitepress). Not a vue-specific feature,
though, but still ended up including it in this addon for some reason :-)

```js
// Button.stories.ts
import type { Meta } from '@storybook/vue3-vite';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docsUrl: 'https://example.com/path/to/your/documentation',
  }
};

export default meta;
```
