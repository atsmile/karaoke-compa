import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Access from "./index";

const meta: Meta<typeof Access> = {
  title: "Sections/Access",
  component: Access,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Access>;

export const Mobile: Story = {};

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
};
