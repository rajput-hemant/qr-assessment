import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@/components/ui/slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["continuous", "range", "discrete"],
      defaultValue: "continuous",
    },
    label: {
      control: { type: "text" },
      defaultValue: "Slider",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      defaultValue: "sm",
    },
    showTooltip: {
      control: {
        type: "boolean",
      },
      defaultValue: "false",
    },
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  },
} as Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Continuous: Story = {
  args: {
    type: "continuous",
    className: "w-96",
  },
};

export const Range: Story = {
  args: {
    type: "range",
    defaultValue: [33, 66],
    className: "w-96",
  },
};

export const Discrete: Story = {
  args: {
    type: "discrete",
    step: 10,
    className: "w-96",
  },
};

export const Tooltip: Story = {
  args: {
    showTooltip: true,
    className: "w-96",
  },
};

export const SizeSM: Story = {
  args: {
    size: "sm",
    className: "w-96",
  },
};

export const SizeMD: Story = {
  args: {
    size: "md",
    className: "w-96",
  },
};
