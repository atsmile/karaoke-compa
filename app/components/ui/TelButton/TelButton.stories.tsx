import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TelButton from "./index";

const meta: Meta<typeof TelButton> = {
  title: "UI/TelButton",
  component: TelButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TelButton>;

export const Small_Mobile: Story = {
  args: {
    size: "sm",
  },
};

export const Medium_Mobile: Story = {
  args: {
    size: "md",
  },
};

export const Large_Mobile: Story = {
  args: {
    size: "lg",
  },
};

export const Small_Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    size: "sm",
  },
};

export const Medium_Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    size: "md",
  },
};

export const Large_Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  args: {
    size: "lg",
  },
};
