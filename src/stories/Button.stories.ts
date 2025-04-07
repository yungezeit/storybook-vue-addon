import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
  title: 'Example/Button (documented)',
  component: Button,
  parameters: {
    documentationUrl: 'https://www.youtube.com/watch?v=yEZ3fbUvtyA',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
