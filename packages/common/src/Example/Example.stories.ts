import type { StoryObj } from '@storybook/react';
import Example from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/ExampleComponent',
  component: Example,
  tags: ['autodocs'],
  argTypes: {
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Red: Story = {
  args: {
    bgColor: "red"
  },
};

export const Pink: Story = {
  args: {
    bgColor: "pink"
  },
};

export const Blue: Story = {
  args: {
    bgColor: "blue"
  },
};

export const Black: Story = {
  args: {bgColor: "black"
  },
};
