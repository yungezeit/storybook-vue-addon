import type { Meta, StoryObj } from '@storybook/vue3';

import Name from './Name.vue';

const meta = {
  title: 'Example/Name (not documented)',
  component: Name,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Name>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
