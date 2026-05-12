import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "./index";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Mobile: Story = {};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
};
