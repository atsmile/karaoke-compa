import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Mobile: Story = {};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
};
