import type { Meta, StoryObj } from '@storybook/vue3';

import Input from './Input.vue';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Input',
  },
};