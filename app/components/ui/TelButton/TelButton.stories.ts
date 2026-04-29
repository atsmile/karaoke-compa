import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TelButton from "./index";

const meta: Meta<typeof TelButton> = {
  title: "UI/TelButton",
  component: TelButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TelButton>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
