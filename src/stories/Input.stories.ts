import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Input from './Input.vue';

const meta = {
  title: 'Example/Input (documented)',
  component: Input,
  parameters: {
    documentationUrl: 'https://www.youtube.com/watch?v=PZoi_z5LR28',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Name',
  },
};
